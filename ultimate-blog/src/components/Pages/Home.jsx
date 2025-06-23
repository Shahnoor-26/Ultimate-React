import { useState, useEffect } from "react";
import { service } from "../../appwrite/configure";
import { Card as Component, Container } from "../index";

const Home = () => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    service.findPosts().then((posts) => {
      if (posts) updatePosts(posts.documents);
    });
  }, []);

  posts.length <= 0 ? (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Component {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
