"use client";
import { courses } from "@/data/courese";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
const categories = [
  "Graphics & Design",
  "Digital Marketing",
  "Video & Animation",
  "Lifestyle",
  "Photography",
];
export default function Courses() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [allProducts, setallProducts] = useState(courses);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [filtered, setFiltered] = useState(allProducts);
  useEffect(() => {
    setFiltered(
      allProducts.filter((elm) =>
        elm.filterCategories.includes(currentCategory)
      )
    );
  }, [currentCategory, allProducts]);

  return (
    <section className="section-popular-course tf-spacing-6 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="tabs-with-filter style-small">
              <div className="heading-section">
                <h2
                  className="letter-spacing-1 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Popular Courses
                </h2>
                <div className="flex items-center justify-between flex-wrap gap-10">
                  <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                    Lorem ipsum dolor sit amet elit
                  </div>
                  <ul
                    className="widget-menu-tab overflow-x-auto wow fadeInUp no-tab"
                    data-wow-delay="0.3s"
                  >
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => setCurrentCategory(category)}
                        className={`item-title ${
                          currentCategory === category ? "active" : ""
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="widget-content-tab wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="widget-content-inner active">
                  <div className="grid-layout-4 gap40">
                    {filtered.map((elm, i) => (
                      <div key={i} className="course-item h240 hover-img">
                        <div className="features image-wrap">
                          <Image
                            className="lazyload"
                            alt=""
                            src={elm.imgSrc}
                            width={520}
                            height={380}
                          />
                          <div
                            className={`box-wishlist tf-action-btns ${
                              isAddedtoWishlist(elm.id) ? "active" : ""
                            } `}
                            onClick={() => toggleWishlist(elm.id)}
                          >
                            <i className="flaticon-heart" />
                          </div>
                        </div>
                        <div className="content">
                          <div className="meta">
                            <div className="meta-item">
                              <i className="flaticon-calendar" />
                              <p>{elm.lessons}</p>
                            </div>
                            <a href="#" className="meta-item">
                              <i className="flaticon-user" />
                              <p>{elm.students}</p>
                            </a>
                            <div className="meta-item">
                              <i className="flaticon-clock" />
                              <p>{elm.duration}</p>
                            </div>
                          </div>
                          <h5 className="fw-5 line-clamp-2">
                            <Link href={`/course-single-v1/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h5>
                          <div className="ratings pb-30">
                            <div className="number">{elm.rating}</div>
                            <i className="icon-star-1" />
                            <i className="icon-star-1" />
                            <i className="icon-star-1" />
                            <i className="icon-star-1" />
                            <svg
                              width={12}
                              height={11}
                              viewBox="0 0 12 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                                stroke="#131836"
                              />
                            </svg>
                            <div className="total">({elm.reviews})</div>
                          </div>
                          <div className="author">
                            By:
                            <a href="#" className="author">
                              {" "}
                              {elm.author}
                            </a>
                          </div>
                          <div className="bottom">
                            <div className="h5 price fw-5">${elm.price}</div>
                            <Link
                              href={`/course-single-v1/${elm.id}`}
                              className="tf-btn-arrow"
                            >
                              <span className="fw-5 h6">Enroll Course</span>
                              <i className="icon-arrow-top-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
