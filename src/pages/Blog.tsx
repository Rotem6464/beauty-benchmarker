import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contentfulClient } from '../lib/contentful';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
        contentfulClient
          .getEntries({ content_type: 'blogPost', order: ['-fields.publishedDate'] })
          .then((res) => {
                    setPosts(res.items);
                    setLoading(false);
          })
          .catch(() => setLoading(false));
  }, []);

  return (
        <>
              <SiteHeader />
              <main className="max-w-3xl mx-auto py-12 px-4">
                      <h1 className="text-3xl font-bold mb-2">Blog</h1>h1>
                      <p className="text-muted-foreground mb-8">Expert advice, reviews, and guides on lifting creams.</p>p>
              
                {loading && <p className="text-muted-foreground">Loading posts...</p>p>}
              
                {!loading && posts.length === 0 && (
                    <p className="text-muted-foreground">No posts published yet. Check back soon!</p>p>
                      )}
              
                      <div className="divide-y">
                        {posts.map((post: any) => (
                      <div key={post.sys.id} className="py-6">
                                    <Link
                                                      to={`/blog/${post.fields.slug}`}
                                                      className="text-xl font-semibold hover:text-brand-600 transition-colors"
                                                    >
                                      {post.fields.title}
                                    </Link>Link>
                        {post.fields.excerpt && (
                                        <p className="text-muted-foreground mt-2">{post.fields.excerpt}</p>p>
                                    )}
                        {post.fields.publishedDate && (
                                        <p className="text-sm text-muted-foreground mt-2">
                                          {new Date(post.fields.publishedDate).toLocaleDateString('en-US', {
                                                              year: 'numeric',
                                                              month: 'long',
                                                              day: 'numeric',
                                        })}
                                        </p>p>
                                    )}
                      </div>div>
                    ))}
                      </div>div>
              </main>main>
              <SiteFooter />
        </>>
      );
}
</>
