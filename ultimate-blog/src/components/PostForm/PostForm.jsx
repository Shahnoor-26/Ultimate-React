import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input, EditorBox, Select } from "../index";
import { service } from "../../appwrite/configure";

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.userdata);
  const { register, handleSubmit, setValue, getValues, watch, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const submit = async (data) => {
    try {
      if (post) {
        const file = data.image[0]
          ? await service.fileUpload(data.image[0])
          : null;

        if (file) await service.fileDelete(post.picture);

        const dataPost = await service.updatePost(post.$id, {
          ...data,
          picture: file ? file.$id : undefined,
        });

        if (dataPost) navigate(`/post/${dataPost.$id}`);
      } else {
        const file = data.image[0]
          ? await service.fileUpload(post.image[0])
          : null;

        if (file) {
          data.picture = file.$id;
          const dataPost = await service.createPost(userdata.$id, { ...data });
          if (dataPost) navigate(`/post/${dataPost.$id}`);
        }
      }
    } catch (error) {
      console.log("Form submission error: ", error);
    }
  };

  const transformSlug = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replaceAll(/^[a-zA-z\d]+/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title")
        setValue("slug", transformSlug(value.title, { shouldValidate: true }));

      return () => subscription.unsubscribe();
    });
  }, [watch, transformSlug, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <EditorBox
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" className="w-full bg-gray-500">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
