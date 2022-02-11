import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import styles from "../../styles/SinglePost.module.css";
import BlogPost from "../../components/BlogPost/BlogPost";
import ReactMarkdown from "react-markdown";



const Post = ({ post, posts }) => {

  const router = useRouter();
  return (
    <div>
      <Navbar textColor="megaDark" />
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-11">
            <div className="container">
              <div className={styles.back}>
                <img
                  src="./img/go-back.svg"
                  alt="blog"
                  className="img-fluid w-50"
                />
              </div>
            </div>
            <div className="container pt-3">
              <span className={`poppins-medium ${styles.post_date}`}>
                12 SEPT, 2030
              </span>
              <div>
                <h3 className="poppins-bold pt-2">
                  {post.data.attributes.title}
                </h3>
              </div>
              <div className="d-flex justify-content-center py-3">
                <img
                  src={post.data.attributes.post_image?.data.attributes.url}
                  alt="megalaw"
                  className="img-fluid"
                />
              </div>
              <p className="poppins-medium opacity-50">
                {/* {post.data.attributes.content} */}
                <ReactMarkdown>
                {post.data.attributes.content}
                </ReactMarkdown>
              </p>

              <div className="d-flex align-items-center">
                <div className={styles.authorContainer}>
                  <img
                    src={
                      post.data?.attributes.author_image?.data?.attributes.url
                    }
                    alt="megalaw"
                    className="img-fluid rounded-circle ms-3 my-auto author_image"
                  />
                </div>
                <span className="ms-4">
                  <span className="poppins-bold d-block">
                    {post.data.attributes.author_name}
                  </span>
                  <span className="poppins-medium opacity-50 fs-16">
                    {post.data.attributes.author_title}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="poppins-bold">More Articles</h3>
            <p className="poppins-medium opacity-50">
            Just a collection of our thoughts on various topics
            </p>
          </div>
        </div>
        <div className="row">
          {posts?.data?.map((post, index) => {
            return (
              <div className="col-md-6" key={index}>
                <BlogPost
                  key={index}
                  title={post?.attributes?.title}
                  postImg={post.attributes.post_image?.data?.attributes?.url}
                  postContent={post.attributes.content.slice(0, 300) + "..."}
                  postUrl={`/blog/${post.id}`}
                />
                ;
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ query: { blogId } }) {
  const res = await axios.get(
    `https://megalaw.herokuapp.com/api/posts/${blogId}?populate=*`
  );

  const postRes = await axios.get(
    `https://megalaw.herokuapp.com/api/posts?populate=*`
  );

  // console.log('Design ===>', postRes)
  // const posts = await postRes.data

  return {
    props: {
      post: res?.data,
      posts: postRes.data,
    },
  };
}

export default Post;
