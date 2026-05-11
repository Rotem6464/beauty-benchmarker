import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { contentfulClient } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

  useEffect(() => {
        if (!slug) return;
        contentfulClient
          .getEntries({ content_type: 'blogPost', 'fields.slug': slug })
          .then((res) => {
                    if (res.items.length === 0) {
                                setNotFound(true);
                    } else {
                                setPost(res.items[0]);
                    }
                    setLoading(false);
          })
          .catch(() => {
                    setNotFound(true);
                    setLoading(false);
          });
  }, [slug]);

  if (loading) {
        return (
                <>
                        <SiteHeader />
                        <div className="max-w-3xl mx-auto py-12 px-4">
                                  <p className="text-muted-foreground">Loading...</p>p>
                        </div>div>
                        <SiteFooter />
                </>>
              );
  }
  
    if (notFound || !post) {
          return (
                  <>
                          <SiteHeader />
                          <div className="max-w-3xl mx-auto py-12 px-4">
                                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>h1>
                                    <Link to="/blog" className="text-brand-600 hover:underline">
                                                &larr; Back to Blog
                                    </Link>Link>
                          </div>div>
                          <SiteFooter />
                  </>>
                );
    }
  
    return (
          <>
                <SiteHeader />
                <main className="max-w-3xl mx-auto py-12 px-4">
                        <Link to="/blog" className="text-sm text-muted-foreground hover:text-brand-600 transition-colors mb-6 inline-block">
                                  &larr; Back to Blog
                        </Link>Link>
                        <h1 className="text-3xl font-bold mb-4">{post.fields.title}</h1>h1>
                  {post.fields.publishedDate && (
                      <p className="text-sm text-muted-foreground mb-8">
                        {new Date(post.fields.publishedDate).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                      })}
                      </p>p>
                        )}
                        <div className="prose prose-slate max-w-none">
                          {documentToReactComponents(post.fields.body)}
                        </div>div>
                </main>main>
                <SiteFooter />
          </>>
        );
}
</></></>
