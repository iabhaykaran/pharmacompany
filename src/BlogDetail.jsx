import React from "react";
import { useParams, Link } from "react-router-dom";

import blogs from "./Data";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <>
      <div className="news-card">
        <div>
          <Link to="/" className="back-btn">
            Back
          </Link>
        </div>
        <h2 className="news-heading">{blog.title}</h2>
     
        <br />
        <p className="mt-2">{blog.content}</p>
      </div>
    </>
  );
}
