import React from "react";

function About() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">About</h5>
                <p class="card-text">
                  Welcome to our natural blog, your gateway to the wonders of
                  the natural world! At HR Blog, we're dedicated to celebrating
                  the beauty and diversity of nature. From the smallest flower
                  to the grandest landscapes, we aim to inspire a deeper
                  connection with the world around us through informative
                  articles, breathtaking photography, and engaging stories.
                  <hr />
                  <h5>Mission:</h5> Our mission is to educate, inspire, and
                  empower individuals to embrace and protect the natural world.
                  Through our content, we strive to foster a sense of wonder and
                  appreciation for nature's wonders, encouraging sustainable
                  practices and conservation efforts. <hr />
                  <h5>Vision: </h5>We envision a world where people live in
                  harmony with nature, recognizing its intrinsic value and the
                  importance of preserving it for future generations. Through
                  our blog, we aim to cultivate a global community of nature
                  lovers who share our passion for environmental stewardship and
                  strive to make a positive impact on the planet.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <img
                src="https://i.pinimg.com/236x/a0/56/9e/a0569ebdf9d66c593b558742cd46eac9.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
