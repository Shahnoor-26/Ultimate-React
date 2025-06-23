import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { service } from "../../appwrite/configure";
import { PostForm as Component, Container } from "../index";

const EditPost = () => {
  const [post, updatePost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      service.findPost(slug).then((post) => {
        if (post) updatePost(post);
      });
    } else navigate("/");
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <Component post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
