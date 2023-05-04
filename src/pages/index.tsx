import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handlePostId = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  };
  return (
    <>
      <div>Home pages</div>
      <p>This is home pages</p>
      <Link href="/posts" legacyBehavior>
        {/*Tot cho SEO*/}
        <a>Post Page</a>
      </Link>
      <button onClick={handlePostId}>Post Id Page</button> {/*Router Push*/}
      {/* fetch data truoc -> tang trai nghiem nguoi dung(prefetch = true) */}
    </>
  );
}
