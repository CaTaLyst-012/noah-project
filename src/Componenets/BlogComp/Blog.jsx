// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../WelcomeComp/LatestBlog/LatestBlog.jsx";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog-page">
      <div className="blog-main">
        {blogPosts.slice(0, 5).map((post) => (
          <article key={post.id} className="blog-row">
            <div className="blog-row-media">
              {post.mediaType === "video" && post.videoSrc && (
                <video src={post.videoSrc} controls />
              )}
              {post.mediaType === "image" && post.image && (
                <img src={post.image} alt={post.title} />
              )}
              {post.mediaType === "audio" && post.audioSrc && (
                <div className="blog-audio-wrapper">
                  <audio src={post.audioSrc} controls />
                </div>
              )}
            </div>

            <div className="blog-row-content">
              <h2 className="blog-row-title">{post.title}</h2>

              <div className="blog-row-meta">
                <span>{post.datetime}</span>
                <span className="dot">•</span>
                <span>{post.authorName}</span>
                <span className="dot">•</span>
                <span>12 COMMENTS</span>
              </div>

              <p className="blog-row-excerpt">{post.excerpt}</p>

              <Link to={`/blog/${post.id}`} className="blog-row-button">
                READ FULL ARTICLE
              </Link>
            </div>
          </article>
        ))}
      </div>

      <aside className="blog-sidebar">
        {/* SEARCH */}
        <div className="sidebar-box">
          <input
            type="text"
            className="sidebar-search-input"
            placeholder="Search articles..."
          />
        </div>

        {/* CATEGORIES */}
        <div className="sidebar-box">
          <h3 className="sidebar-title">CATEGORIES</h3>
          <ul className="sidebar-list">
            {[
              "NEW CAR LAUNCH",
              "RACE CARS",
              "VINTAGE CARS",
              "CAR ACCESSORIES",
              "PRE OWNED CARS",
            ].map((cat) => (
              <li key={cat}>
                <span className="arrow-bullet">➤</span>
                <span>{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* POPULAR POSTS */}
        <div className="sidebar-box">
          <h3 className="sidebar-title">POPULAR POSTS</h3>
          <div className="popular-posts">
            {blogPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="popular-post-item">
                {post.image && (
                  <img src={post.image} alt={post.title} />
                )}
                <div>
                  <p className="popular-post-title">{post.title}</p>
                  <span className="popular-post-date">
                    {post.datetime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARCHIVES */}
        <div className="sidebar-box">
          <h3 className="sidebar-title">ARCHIVES</h3>
          <ul className="sidebar-list">
            <li>
              <span className="arrow-bullet">➤</span>
              <span>JANUARY 2026</span>
            </li>
            <li>
              <span className="arrow-bullet">➤</span>
              <span>FEBRUARY 2026</span>
            </li>
          </ul>
        </div>

        {/* TAGS */}
        <div className="sidebar-box">
          <h3 className="sidebar-title">TAGS</h3>
          <div className="tags">
            {["CARS", "FERRARI", "RENT", "LUXURY CARS", "SELL"].map(
              (tag) => (
                <button key={tag} className="tag-pill">
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* SELL CAR – you can replace this with your real component */}
        <div className="sidebar-sell-card2">
          <div className="sidebar-sell-image-wrapper2">
            {/* <img
              src={Car16}
              alt="Sell your car"
              className="sidebar-sell-image"
            /> */}
          </div>
          <div className="sidebar-sell-content2">
            <div className="sidebar-sell-text2">
              <h3>Sell Your Car</h3>
              <p>
                List your vehicle on AUT0MAN and reach thousands of ready buyers in minutes.
              </p>
            </div>
            <button type="button" className="sidebar-sell-button">
              SUBMIT CAR
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Blog;
