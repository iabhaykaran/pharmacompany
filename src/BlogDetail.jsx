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
      <Link to="/" className="text-blue-600 hover:underline block mt-4">
        BACK
      </Link>
      <div  className="news-card"  >
        <h2 className="news-heading">{blog.title}</h2>
        <p className="mt-2">{blog.content}</p>
      </div>
    </>
  );
}
