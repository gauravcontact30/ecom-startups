import React from "react";
import PageHeader from "../shared/header/PageHeader";

const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog Page" curPage="Blogs" />
      {/* blog page */}
      <div className="blog-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">Left Side</div>
            <div className="col-lg-4 col-12">Right Side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
