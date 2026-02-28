import React from 'react'
import './blogPage.css'
import Blog from '../../Componenets/BlogComp/Blog.jsx';
import PageHero from '../../Componenets/PageHero/PageHero.jsx';

function BlogPage() {
  return (
    <div className="cars-pageContainer">
      <PageHero
        title="BLOG PAGE"/>
      <Blog/>
    </div>
  );
}

export default BlogPage;