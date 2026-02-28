import React from "react";
import { Link } from "react-router-dom";
import "./latestBlog.css";
import PostImg1 from "../../../assets/Images/car3.jpeg";   // image post
import PostImg2 from "../../../assets/Images/car10.jpeg";  // image post
import PostImg3 from "../../../assets/Images/car16.jpeg";  // image post
import Author1 from "../../../assets/Images/profileImg.jpeg";
import Author2 from "../../../assets/Images/profileImg.jpeg";
import Author3 from "../../../assets/Images/profileImg.jpeg";
import ReviewVideo from "../../../assets/Video/carVideo.mp4";
import BuyerVoiceNote from "../../../assets/Audio/AEO.mp3";

export const blogPosts = [
  {
    id: 1,
    title: "How to Get the Best Deal on Your Next Mercedes-AMG",
    excerpt:
      "Negotiating the right price starts before you ever step into the dealership. From pre-approval to timing your purchase, here are insider tips that actually work...",
    mediaType: "image",
    image: PostImg1,
    authorName: "Lasisi Noah",
    authorAvatar: Author1,
    datetime: "Feb 02, 2026 • 10:15 AM",
    category: "Buying Tips",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Why the Porsche 911 GT3 RS Is the Perfect Lagos Daily Driver",
    excerpt:
      "Comfort, reliability, and fuel efficiency in traffic are more important than raw horsepower. The Porsche 911 GT3 RS finds a sweet spot Nigerian drivers will appreciate...",
    mediaType: "image",
    image: PostImg2,
    authorName: "Lasisi Praise",
    authorAvatar: Author2,
    datetime: "Jan 30, 2026 • 4:42 PM",
    category: "Car Reviews",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "5 Things to Inspect Before Buying a Used Range Rover",
    excerpt:
      "From service history to underbody inspection, skipping these checks could cost you hundreds of thousands in repairs after purchase...",
    mediaType: "image",
    image: PostImg3,
    authorName: "Noah Catalyst",
    authorAvatar: Author3,
    datetime: "Jan 28, 2026 • 1:05 PM",
    category: "Maintenance",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Test Drive: Lexus RX 350 in Lekki – Full POV",
    excerpt:
      "Watch a full POV drive through Lekki expressway as we test ride comfort, noise levels, and acceleration of the latest RX 350...",
    mediaType: "video",
    image: null, // video only
    videoSrc: ReviewVideo,
    authorName: "Noah Praise",
    authorAvatar: Author1,
    datetime: "Jan 25, 2026 • 6:20 PM",
    category: "Video Review",
    readTime: "9 min watch",
  },
  {
    id: 5,
    title: "Voice Note: Real Buyer Shares Their GLE 63S Experience",
    excerpt:
      "Listen to a Lagos-based entrepreneur break down what they love and hate about daily driving a Mercedes-AMG GLE 63S...",
    mediaType: "audio",
    image: null, // audio only, plain card background
    audioSrc: BuyerVoiceNote,
    authorName: "Lasisi Catalyst",
    authorAvatar: Author2,
    datetime: "Jan 22, 2026 • 9:00 AM",
    category: "Owner Stories",
    readTime: "3 min listen",
  },
  {
    id: 6,
    title: "Top 10 Fuel-Efficient Cars for Long Commutes",
    excerpt:
      "If you spend hours on Third Mainland Bridge, these fuel-efficient sedans and SUVs can save you serious money every month...",
    mediaType: "text",
    image: null, // plain background
    authorName: "Praise Catalyst",
    authorAvatar: Author3,
    datetime: "Jan 18, 2026 • 11:40 AM",
    category: "Guides",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Should You Finance or Pay Cash for Your Next Car?",
    excerpt:
      "Understanding interest rates, loan terms, and your true budget is more important than the car price on the sticker...",
    mediaType: "text",
    image: null, // plain background
    authorName: "Noah Lasisi",
    authorAvatar: Author1,
    datetime: "Jan 15, 2026 • 2:10 PM",
    category: "Finance",
    readTime: "6 min read",
  },
];

const LatestBlog = () => {
  const [first, second, third, fourth, fifth, sixth, seventh] = blogPosts;

  return (
    <section className="latest-blog-section">
      <div className="latest-blog-header">
        <h2 className="latest-blog-title">Latest From The Blog</h2>
        <div className="latest-blog-title-underline" />
        <p className="latest-blog-subtext">Best Car Deals</p>
      </div>

      <div className="latest-blog-grid">
        {/* Left column */}
        <div className="latest-blog-left">
          <article className="blog-card blog-card-large">
            <BlogCardInner post={first} />
          </article>

          <div className="latest-blog-left-bottom">
            <article className="blog-card blog-card-small">
              <BlogCardInner post={fifth} />
            </article>
            <article className="blog-card blog-card-small">
              <BlogCardInner post={sixth} />
            </article>
            <article className="blog-card blog-card-small">
              <BlogCardInner post={seventh} />
            </article>
          </div>
        </div>

        {/* Right column */}
        <div className="latest-blog-right">
          <div className="latest-blog-right-top">
            <article className="blog-card blog-card-medium">
              <BlogCardInner post={second} />
            </article>
            <article className="blog-card blog-card-medium">
              <BlogCardInner post={third} />
            </article>
          </div>

          <article className="blog-card blog-card-wide">
            <BlogCardInner post={fourth} />
          </article>
        </div>
      </div>
    </section>
  );
};

const BlogCardInner = ({ post }) => {
  const {
    id,
    title,
    excerpt,
    mediaType,
    image,
    videoSrc,
    audioSrc,
    authorName,
    authorAvatar,
    datetime,
    category,
    readTime,
  } = post;

  const renderMedia = () => {
    if (mediaType === "video" && videoSrc) {
      return (
        <div className="blog-card-media">
          <video className="blog-card-media-video" src={videoSrc} controls />
          <span className="blog-media-badge">Video</span>
        </div>
      );
    }

    if (mediaType === "audio" && audioSrc) {
      return (
        <div className="blog-card-media blog-card-audio-wrapper">
          <audio className="blog-card-audio" src={audioSrc} controls />
          <span className="blog-media-badge">Voice note</span>
        </div>
      );
    }

    if (mediaType === "image" && image) {
      return (
        <div className="blog-card-media">
          <img src={image} alt={title} className="blog-card-media-image" />
        </div>
      );
    }

    // text-only: no media block
    return null;
  };

  return (
    <div className="blog-card-inner">
      {renderMedia()}

      <div className="blog-card-content">
        <div className="blog-card-meta-top">
          {category && <span className="blog-category-pill">{category}</span>}
          {readTime && <span className="blog-readtime">{readTime}</span>}
        </div>

        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>

        <div className="blog-card-footer">
          <div className="blog-author">
            <img
              src={authorAvatar}
              alt={authorName}
              className="blog-author-avatar"
            />
            <div className="blog-author-text">
              <span className="blog-author-name">{authorName}</span>
              <span className="blog-datetime">{datetime}</span>
            </div>
          </div>

          <Link to={`/blog/${id}`} className="blog-readmore">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
