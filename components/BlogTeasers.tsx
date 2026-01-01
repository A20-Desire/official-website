import React from 'react'

const posts = [
  {
    id: 1,
    title: '5 Essential Cloud Computing Trends for 2025',
    excerpt: 'Discover the latest cloud innovations transforming business operations and learn how to leverage them for competitive advantage.',
    date: 'October 20, 2025',
    author: 'John Ungozu',
    category: 'Cloud Computing',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications: Best Practices',
    excerpt: 'A comprehensive guide to architecting web applications that grow with your business needs and user base.',
    date: 'October 15, 2025',
    author: 'Sarah Johnson',
    category: 'Web Development',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Cybersecurity Essentials Every Business Needs',
    excerpt: 'Protect your digital assets with these fundamental security practices and tools that every organization should implement.',
    date: 'October 10, 2025',
    author: 'Michael Chen',
    category: 'Cybersecurity',
    readTime: '6 min read'
  }
]

export default function BlogTeasers() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-lg text-muted max-w-2xl">
          Stay updated with the latest trends, tips, and best practices in technology and digital transformation
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-border/50">
            <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="text-white text-center p-6">
                <div className="text-sm uppercase tracking-wide mb-2 opacity-90">{post.category}</div>
                <div className="text-xs opacity-75">{post.readTime}</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-light mb-3 flex items-center justify-between">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
              <button className="text-primary font-semibold text-sm hover:underline">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn-primary">View All Articles</button>
      </div>
    </div>
  )
}
