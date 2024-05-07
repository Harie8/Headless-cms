// Contact.js

import React from "react";

function Contact() {
  return (
    <>
      <div>
        <hr></hr>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Social</h5>
                  <img src="social.jpeg" class="card-img-top" alt="..." />
                  <p class="card-text">Follow Us</p>
                  <p>
                    <a href="https://www.instagram.com/" class="card-link">
                      Insta
                    </a>
                  </p>
                  <a href="https://www.facebook.com/" class="card-link">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Phone</h5>
                  <img src="contact.jpeg" class="card-img-top" alt="..." />
                  <hr />
                  <p class="card-text">+916261680276</p>
                  <p>+918085060754</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Email</h5>
                  <img src="email.jpeg" class="card-img-top" alt="..." />
                  <hr />
                  <a href="www.email.com" class="card-link">
                    <p>harie0824@gmail.com</p>
                    <p>harisahu240798@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
