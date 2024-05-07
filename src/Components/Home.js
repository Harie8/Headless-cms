import React, { useState, useEffect } from "react";

const Home = ({ pageId }) => {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          `http://localhost:81/wp-headless/server/wp-json/wp/v2/pages/11`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch page");
        }
        const data = await response.json();
        setPageContent(data.content.rendered);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPage();
  }, [pageId]);

  return (
    <>
      <div>
        <center>
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
          <h3>........</h3>
        </center>
      </div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img
                  src="https://i.pinimg.com/236x/7f/f6/0f/7ff60f62703018611df83d5e45faa3ef.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">About</h5>
                  <p class="card-text">
                    Welcome to our blog! We're dedicated to bringing you
                    insightful and engaging content on exploring the nature..
                  </p>
                  <a href="http://localhost:3000/about" class="btn btn-primary">
                    More..
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="https://i.pinimg.com/236x/a2/a4/9a/a2a49a637a70cf1efb8c29d587829d6d.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Post</h5>
                  <p class="card-text">Lets explore....with our post.</p>
                  <a href="http://localhost:3000/post" class="btn btn-primary">
                    More...
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img
                  src="https://i.pinimg.com/236x/60/6f/cf/606fcf646f2f1ab3c95fbb1ce1888064.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Contact</h5>
                  <p class="card-text">To interact us visit here...</p>
                  <a
                    href="http://localhost:3000/contact"
                    class="btn btn-primary"
                  >
                    More..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
