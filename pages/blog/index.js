import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/Navbar";
import { Blog as blog } from "../../utils/Blog";
import BlogPost from "../../components/BlogPost/BlogPost";
import { API_URL } from "../../config/constant";
import FeaturedPost from "../../components/FeaturedPost/FeaturedPost";
import Modal from "../../components/modal/Modal";

const Blog = ({ posts }) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false)

  let settings_sm = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.08,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  console.log(posts.data);
  
  const lastPost = posts.data.length-1
  const latestPost= posts.data[lastPost]
  console.log(lastPost);
  console.log(latestPost);
  return (
    <div>
      <Navbar textColor="megaDark"  setOpenModal={setOpenModal}  />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="container py-5">
        <div className="row jusify-content-center align-items-center">
         <FeaturedPost title={latestPost.attributes.title}
         postContent={latestPost.attributes.content.slice(0, 180) + '...'}
         postImg={latestPost.attributes.post_image?.data.attributes.url}
         postUrl={`/blog/${latestPost.id}`} />
        </div>
      </div>
      <section id="blog" className={`py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="poppins-bold">Our Blog</h3>
              <p className="poppins-medium opacity-50">
                You A CompleteJust a collection of our thoughts on various
                topics
              </p>
            </div>
          </div>
          <div className="row d-none d-sm-flex">
          {posts.data.map((post, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <BlogPost
                    key={index}
                    title={post?.attributes?.title}
                    postImg={post.attributes.post_image?.data?.attributes?.url}
                    postContent={post.attributes.content.slice(0, 180) + "..."}
                    postUrl={`/blog/${post.id}`}
                  />
                  ;
                </div>
              );
            })}
          </div>
          <div className="container d-sm-none">
            <Slider {...settings_sm} className="slider">
              {posts.data.map((post, index) => {
                return (
                  <BlogPost
                    key={index}
                    title={post?.attributes?.title}
                    postImg={post.attributes.post_image?.data?.attributes?.url}
                    postContent={post.attributes.content.slice(0, 180) + '...'}
                    postUrl={`/blog/${post.id}`}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  // let postRes = null;

  const postRes = await axios.get(
    `https://megalaw.herokuapp.com/api/posts?populate=*`
  );

  return {
    props: {
      posts: postRes?.data,
    },
  };
}

export default Blog;
