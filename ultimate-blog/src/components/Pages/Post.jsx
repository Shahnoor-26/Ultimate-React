import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container } from "../index";
import parse from "html-react-parser";
import { service } from "../../appwrite/configure";

const Post = () => {
  const [post, updatePost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userdata = useSelector((state) => state.auth.userdata);

  const isAuthor = post && userdata ? post.userId === userdata.$id : false;

  useEffect(() => {
    if (slug)
      service.findPost(slug).then((post) => {
        if (post) updatePost(post);
        else navigate("/");
      });
    else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.fileDelete(post.picture);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={service.filePreview(post.picture)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button  className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button  onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
};

export default Post;
