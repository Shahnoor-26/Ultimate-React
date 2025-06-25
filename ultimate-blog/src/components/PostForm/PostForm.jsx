import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { service } from "../../appwrite/configure";
import { Input, Button, EditorBox, Select } from "../index";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post ? post.title : "",
        content: post ? post.content : "",
        status: post ? post.status : "active",
        slug: post ? post.$id : "",
      },
    });

  const navigate = useNavigate();
  const response = useSelector((state) => state.auth.userdata);
  const userdata = response.userdata;

  const submit = async (data) => {

    if (post) {
      const file = data.image[0]
        ? await service.fileUpload(data.image[0])
        : null;

      if (file) service.fileDelete(post.picture);

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        picture: file ? file.$id : null,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = await service.fileUpload(data.image[0]);


      if (file) {
        const fileId = file.$id;
        

        const dbPost = await service.createPost({
          ...data,
          userId: userdata.$id ? userdata.$id : "",
          picture: fileId  
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const transformSlug = useCallback((values) => {
    if (values && typeof values === "string") {
      return values
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", transformSlug(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, transformSlug, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="title: "
          placeholder="title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <Input
          label="slug: "
          placeholder="slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", transformSlug(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <EditorBox
          label="content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Picture: "
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.filePreview(post.picture)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status: "
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          children={post ? "Update" : "Submit"}
          type="submit"
          className="w-full bg-gray-950"
        />
      </div>
    </form>
  );
};

export default PostForm;
