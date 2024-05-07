import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:81/wp-headless/server/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <center>
              {" "}
              <h2 style={{ color: "#333" }}>{post.title.rendered}</h2>
            </center>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              style={{
                //border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            ></div>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
