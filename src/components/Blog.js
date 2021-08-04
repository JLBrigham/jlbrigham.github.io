import React from "react";
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div id="blog">
      <h2>Blog</h2>
      <h3>
        I've been keeping a blog to record my journey as a software developer,
        here a some featured posts
      </h3>
      <BlogPost
        link={
          "https://joannabrigham.medium.com/making-a-dynamic-progress-bar-in-my-first-react-native-app-25e3de9f2f3"
        }
        title={"Making a dynamic progress bar in my first React Native app"}
      />
      <BlogPost
        link={
          "https://joannabrigham.medium.com/so-why-did-i-make-a-career-change-to-software-development-a102bee99681"
        }
        title={"So Why did I make a career change to Software Development?"}
      />
      <BlogPost
        link={
          "https://joannabrigham.medium.com/completing-the-chitter-challenge-post-makers-some-reflections-a695f643c008"
        }
        title={
          "Going solo, completing my first full stack application post Makers"
        }
      />
    </div>
  );
}

export default Blog;
