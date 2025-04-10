import React from "react";
import { Link } from "react-router-dom";
import blogs from "./Data";

export default function BlogList() {
  return (
    <div>
      <h2 style={{ color: "red", marginBottom: "3px" }}>Breaking News</h2>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-2   news-tiles  ">
            <h2>
              <Link
                to={`/blog/${blog.id}`}
                style={{ textDecoration: "none" }}
                className="news-heading"
              >
                {blog.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
