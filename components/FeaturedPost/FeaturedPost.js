import Link from "next/link";
import React from "react";

const FeaturedPost = (post) => {
  return (
    <div className="container">
      <div className="row jusify-content-center align-items-center">
        <div className="col-md-6">
          <span className="tomato-color opacity-75 poppins-medium">
            FEATURED POST
          </span>
          <h3 className="poppins-bold pe-lg-5">
            {post.title}
          </h3>
          <span className="poppins-regular">
            {post.postContent}
          </span>
          <Link href={post.postUrl}>
            <a
              className="pb-2 tomato-color d-flex align-items-center"
            >
              Read more <span className="fs-2 ps-2">&#8594;</span>
            </a>
            </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
            <img src={post.postImg} alt="megalaw" className="img-fluid" />
          </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
