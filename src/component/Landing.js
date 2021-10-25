import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <>
      <nav>
        <div className="container-fluid" id="navbar">
          <img
            className="logo"
            src="\Screenshot_2021-09-10_183216-removebg-preview.png"
          />

          <div class="input-group mb-4 border rounded-pill p-1">
            <div class="input-group-prepend border-0">
            <span id="search" class="material-icons .text-rgba(92, 92, 92, 1)">
                  search
                </span>
              <button
                id="button-addon4"
                type="button"
                class="btn btn-link text-info"
              >
                <input
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-describedby="button-addon4"
              class="form-control bg-transparent border-0"
            />
              </button>
            </div>
            
          </div>

          <p className="arrow-down">
            <span>Create account.</span>&nbsp;
            <span className="blue">It's free!</span>{" "}
            <span class="material-icons">arrow_drop_down</span>
          </p>
        </div>
      </nav>
      <img className="main-img" src="7d56a759ac56bc165f65c40094aba4e8.jpg" />
      <div className="join">
      <button className="btn btn-outline-light">Join Group</button>
      </div>
      <div className="image-text-container">
         
        <h2 className="image-text">Computer Engineering</h2>
        <p className="image-text">142,765 Computer Engineers follow this</p>
      </div>
      <div className="container-fluid" id="align">
      <a href="" className="mobile-view">Posts(368)</a>
      <button className="btn btn-secondary" id="filter">
              Filter: All <span class="material-icons">arrow_drop_down</span>
            </button>
      <div className="container" id="link">
     
        <div className="nav">
          <div className="nav-links">
          
            <a href="" className="desktop-view">All Posts(32)</a>
            <a href="" className="desktop-view">Article</a>
            <a href="" className="desktop-view">Event</a>
            <a href="" className="desktop-view">Education</a>
            <a href="" className="desktop-view">Job</a>
          </div>
          <div className="nav-btn">
            <button className="btn btn-secondary" id="secondary">
              Write a Post <span class="material-icons">arrow_drop_down</span>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary">
              {" "}
              <span class="material-icons">group_add</span>&nbsp;Join Group
            </button>
          </div>
        </div>
      </div>
      </div>
      <br />
      <div className="container" id="post">
        <div className="post-container">
          <div className="border">
            <img
              className="post-img"
              src="\59515bfc8d2d4ff8928be097376153e9.jpg"
            />
            <div className="container" id="sub-post-container">
              <span className="post-heading">✍️ Article</span>
              <div className="nav-links">
                <span className="post-question">
                  What if famous brands had regular fonts? Meet RegularBrands!
                </span>
                <span class="material-icons">more_horiz</span>
              </div>
              <br />
              <p className="post-brief">
                I've worked in UX for the better part of a decade.From now on, I
                plan to...
              </p>
              <div className="basic-info">
                <img
                  className="profile"
                  src="\f42d73f4b2b7835b4c918c4edcf10f64.jpg"
                />
                <div className="container" id="additional-info">
                  <span className="profile-name">Sarthak Kamra</span>
                  <span className="nav-links-views">
                    <span class="material-icons">visibility</span>
                    1.4K views
                  </span>
                </div>
                <div></div>
                <button className="btn btn-secondary" id="share">
                  <span class="material-icons">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <div>
            <span class="material-icons-outlined">place</span>

            <input className="place" placeholder="Noida, India" />
            <span class="material-icons">edit</span>
          </div><br/>
          <div className="nav-links">
              
          <span class="material-icons-outlined" id="info-icon">
info
</span>
          <p className="location-footer">&nbsp;&nbsp;&nbsp;
            Your location will help us serve better and extend a personalised
            experience
          </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container" id="post">
        <div className="post-container">
          <div className="border">
            <img
              className="post-img"
              src="\c8e32137d06a7bb3fd57b6dfb4e07bfe.jpg"
            />
            <div className="container" id="sub-post-container">
              <span className="post-heading">✍️ Article</span>
              <div className="nav-links">
                <span className="post-question">
                  What if famous brands had regular fonts? Meet RegularBrands!
                </span>
                <span class="material-icons">more_horiz</span>
              </div>
              <br />
              <p className="post-brief">
                I've worked in UX for the better part of a decade.From now on, I
                plan to...
              </p>
              <div className="basic-info">
                <img
                  className="profile"
                  src="\15d7211204149d93adda6dfafb5d81f2.jpg"
                />
                <div className="container" id="additional-info">
                  <span className="profile-name">Sarthak Kamra</span>
                  <span className="nav-links-views">
                    <span class="material-icons">visibility</span>
                    1.4K views
                  </span>
                </div>
                <div></div>
                <button className="btn btn-secondary" id="share">
                  <span class="material-icons">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container" id="post">
        <div className="post-container">
          <div className="border">
            <img
              className="post-img"
              src="\a2e530610a1b91c9682ba7889c87c1b2.jpg"
            />
            <div className="container" id="sub-post-container">
              <span className="post-heading">✍️ Article</span>
              <div className="nav-links">
                <span className="post-question">
                  What if famous brands had regular fonts? Meet RegularBrands!
                </span>
                <span class="material-icons">more_horiz</span>
              </div>
              <br />
              <p className="post-brief">
                I've worked in UX for the better part of a decade.From now on, I
                plan to...
              </p>
              <div className="basic-info">
                <img
                  className="profile"
                  src="\c3ac7682e52df2e10d0a36ec3f243a44.jpg"
                />
                <div className="container" id="additional-info">
                  <span className="profile-name">Sarthak Kamra</span>
                  <span className="nav-links-views">
                    <span class="material-icons">visibility</span>
                    1.4K views
                  </span>
                </div>
                <div></div>
                <button className="btn btn-secondary" id="share">
                  <span class="material-icons">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
