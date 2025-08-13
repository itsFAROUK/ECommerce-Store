import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "Logitech-520 overview",
      author: "Farouk",
      likes: 50,
      comments: 23,
    },
    {
      title: "You won't blieve how effective is this product",
      author: "Jhon",
      likes: 540,
      comments: 113,
    },
    {
      title: "Top 5 products your setup need",
      author: "Rayan",
      likes: 213,
      comments: 136,
    },
    {
      title: "I tried product X for a month and here is what happen!",
      author: "Zinou",
      likes: 64,
      comments: 7,
    },
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="felx justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600">Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
