import React from "react";
import BlogPost from "./BlogPost";
import SectionTitle from "./SectionTitle";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog" id="blog">
      <SectionTitle title={"Blog"} />
      <div className="blog-subheading-container">
        <p className="blog-subheading">
          I've been keeping a blog to record my journey as a software developer,
          here a some featured posts
        </p>
      </div>
      <div className="blog-post-container">
        <BlogPost
          link={
            "https://joannabrigham.medium.com/making-a-dynamic-progress-bar-in-my-first-react-native-app-25e3de9f2f3"
          }
          title={"Making a Dynamic Progress Bar in My First React Native App"}
        />
        <BlogPost
          link={
            "https://joannabrigham.medium.com/so-why-did-i-make-a-career-change-to-software-development-a102bee99681"
          }
          title={"So Why Did I Make a Career Change to Software Development?"}
        />
        <BlogPost
          link={
            "https://joannabrigham.medium.com/completing-the-chitter-challenge-post-makers-some-reflections-a695f643c008"
          }
          title={
            "Going Solo, Completing My First Full Stack Application Post Makers"
          }
        />
      </div>
    </div>
  );
}

export default Blog;
