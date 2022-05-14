import React from "react";

type Props = {
  blog: {
    content: string;
  };
};

function Blog({ blog }: Props) {
  return <div>{blog.content}</div>;
}

export default Blog;
