import { useState, useEffect } from "react";
import { service } from "../../appwrite/configure";
import { Card as Component, Container } from "../index";

const AllPosts = () => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {}, []);
  service.findPosts([]).then((posts) => {
    if (posts) updatePosts(posts.documents);
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Component {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
