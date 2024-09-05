import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store", // new fetching in every request
  });
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-4xl text-center my-5">
        All Blogs from <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-xl text-center text-gray-500 w-1/2 mx-auto italic mb-10">
        See all the blogs from blogiz.
      </p>

      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
