import React from "react";

const ArticleSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Afterword: The AI Behind This Article
        </h2>

        {/* Outer Box */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          {/* Top Image */}
          <div className="w-full">
            <img
              src="/article.png"
              alt="Analysis Chart"
              className="w-full h-auto"
            />
          </div>

          {/* Green Text Section */}
          {/* <div className="px-6 py-4 bg-gray-50 border-b border-gray-300">
            <p className="text-green-600 font-medium text-sm">
              Your content appears human
            </p>
            <p className="text-gray-600 text-sm mt-1">
              AI detection likelihood: <span className="font-semibold">UNLIKELY</span>
            </p> */}


              {/* Checked Features Section */}
          {/* <div className="bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 text-center">
              {[
                { label: "AI DETECTION UNLIKELY", status: "✓" },
                { label: "HUMAN WRITTEN", status: "✓" },
                { label: "COPYSCAPE", status: "✓" },
                { label: "PLAGIARISM FREE", status: "✓" },
                { label: "GRAMMAR CHECKED", status: "✓" },
                { label: "ENGAGING", status: "✓" },
                { label: "CONTEXTUALIZED", status: "✓" },
                { label: "FACTUAL", status: "✓" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-green-600 text-lg font-bold">
                    {item.status}
                  </span>
                  <span className="text-gray-600 text-sm mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </div> */}
          <hr/>

          {/* Main Content */}
          <div className="px-6 py-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Let’s be clear: ChatGPT wrote this article and generated the hero image. It combined
              my personal experience, knowledge, and research. From the initial notes to finish, it
              took just 37 minutes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Even though it was made by AI, no detection tools could tell. The only thing used was
              OpenAI’s Chat API, no other external tools.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It shows how AI can help in making content interesting and relevant. It’s a new
              chapter in how we create and share information.
            </p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
