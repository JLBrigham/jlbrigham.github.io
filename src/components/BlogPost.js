import React from "react";
import "./BlogPost.css";

function BlogPost(props) {
  return (
    <div className="blog-post-box">
      <h2 className="blog-post-link">
        <a className="blog-post-anchor" href={props.link}>
          {props.title}
        </a>
      </h2>
    </div>
  );
}

export default BlogPost;
