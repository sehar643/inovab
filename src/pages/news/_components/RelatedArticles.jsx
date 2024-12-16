import React from 'react';
import { FiExternalLink } from 'react-icons/fi'; 

const articles = [
  {
    title: 'Bill Walsh leadership lessons',
    date: '17 Jan 2022',
    author: 'Alec Whitten',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Leadership', 'Management'],
    imageUrl: '/relatedArticle1.png', 
  },
  {
    title: 'PM mental models',
    date: '16 Jan 2022',
    author: 'Demi Wilkinson',
    description: 'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Product', 'Research', 'Frameworks'],
    imageUrl: '/relatedArticle2.png',
  },
  {
    title: 'What is Wireframing?',
    date: '15 Jan 2022',
    author: 'Candice Wu',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Design', 'Research'],
    imageUrl: '/relatedArticle3.png',
  },
];

const RelatedArticles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-purple-800 text-sm mb-1">{article.author} • {article.date}</p>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 cursor-pointer flex items-center">
                  {article.title}
                  <FiExternalLink className=" ml-2 h-5 w-5 text-gray-500 hover:text-blue-500" />
                </h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-200 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
