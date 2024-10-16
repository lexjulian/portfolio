function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      date: "October 10, 2024",
      excerpt: "This is a summary of the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "October 12, 2024",
      excerpt: "This is a summary of the second blog post.",
    },
    // Add more blog posts here...
    {
      id: 3,
      title: "Third Blog Post",
      date: "October 15, 2024",
      excerpt: "This is a summary of the third blog post.",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      date: "October 17, 2024",
      excerpt: "This is a summary of the fourth blog post.",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
