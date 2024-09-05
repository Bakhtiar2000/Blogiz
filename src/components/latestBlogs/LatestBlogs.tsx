import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h2 className="text-4xl text-center my-5">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-xl text-center text-gray-500 w-1/2 mx-auto italic mb-10">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>

      <div>
        {blogs.map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
