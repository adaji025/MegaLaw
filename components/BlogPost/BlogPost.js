import Link from "next/link";
import React from "react";

const BlogPost = ({ title, postImg, postContent, postUrl }) => {
  return (
    <div>
      <div className="card bg-transparent border-0 px-2">
        <img src={postImg} alt="post image" className="card-img-top" />
        <div className="card-body">
          <h5 className="poppins-medium">{title}</h5>
          <p
            className="poppins-medium opacity-50 pt-1"
            
          >
            {postContent}
          </p>
          <Link href={postUrl}>
            <a
              // onClick={() => router.push("/post")}
              className="pb-2 tomato-color opacity-50 d-flex align-items-center"
            >
              Read more <span className="fs-2 ps-2">&#8594;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
