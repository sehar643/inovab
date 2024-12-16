import React from "react";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  const posts = [
    {
      id: 1,
      title: "UX review presentations",
      author: "Olivia Rhye",
      date: "20 Jan 2022",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/Image.png",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      id: 2,
      title: "Migrating to Linear 101",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
      image: "/Image (6).png",
      tags: ["Design", "Research"],
    },
    {
      id: 3,
      title: "Building your API Stack",
      author: "Lana Steiner",
      date: "18 Jan 2022",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...",
      image: "/Image (7).png",
      tags: ["Design", "Research"],
    },
  ];

  return (
    <div className="py-8 pl-10 pr-10">
      <h2 className="text-2xl font-semibold mb-6">Recent Updated Articles</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Large Post */}
        <div className="group">
          <Link href="#" className="block">
            <div className="relative">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{posts[0].author}</span>
                <span>•</span>
                <span>{posts[0].date}</span>
              </div>

              <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors">
                {posts[0].title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {posts[0].description}
              </p>

              <div className="flex gap-2 mt-4">
                {posts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm rounded-full
                      ${
                        tag === "Design"
                          ? "bg-green-100 text-green-700"
                          : tag === "Research"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column - Two Smaller Posts */}
        <div className="space-y-6">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="group">
              <Link
                href="#"
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <div className="relative flex-shrink-0 w-full sm:w-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full sm:w-auto h-40 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
                </div>

                <div className="flex-grow w-full sm:w-auto">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm mt-2 text-gray-500">
                    {post.description}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full
                          ${
                            tag === "Design"
                              ? "bg-green-100 text-green-700"
                              : tag === "Research"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
