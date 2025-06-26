import { useState, useEffect } from "react";
import { service } from "../../appwrite/configure";
import { Card as Component, Container } from "../index";

const AllPosts = () => {
  const [posts, updatePosts] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    service.findPosts().then((posts) => {
      if (posts) updatePosts(posts.documents);
    });
  }, []);

=======

  useEffect(() => {
    service.findPosts().then((posts) => {
    if (posts) updatePosts(posts.documents);
  
    
  })}, [])
  


  
>>>>>>> af21455ef8e03e448a7c84c08b900ba99c539cff
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            
            <div key={post.$id} className="p-2 w-1/4">
              <Component $id={post.$id} picture={post.picture} title={post.title}  />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
