import React from "react";

const BlogPost = ({post}) => {
  return (
    <div>
      <div className="card bg-transparent border-0 px-2">
        <img src={post.img} alt="post image" className="card-img-top" />
        <div className="card-body">
          <h5 className="poppins-medium">
           {post.description}
          </h5>
          <p className="poppins-medium opacity-50 pt-1">
            {post.content}
          </p>
          <a
            onClick={() => router.push("/post")}
            className="pb-2 tomato-color opacity-50 d-flex align-items-center"
          >
            Read more <span className="fs-2 ps-2">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
