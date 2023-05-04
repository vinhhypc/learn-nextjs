import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
export interface PostPageProps {
  post: any;
}

const PostDetailPage = ({ post }: PostPageProps) => {
  const router = useRouter();
  const test = JSON.stringify(router.query);
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('Get Static Paths');
  const res = await fetch('https://test-one-zeta-99.vercel.app/services');
  const data = await res.json();

  return {
    paths: data.map((post: any) => ({ params: { postId: `${post?.id}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  console.log('get Static Props', context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  // server -side ; build-time//
  // co the fetch data tu phia server//
  const res = await fetch(`https://test-one-zeta-99.vercel.app/services/${postId}`);
  const data = await res.json();
  return {
    props: {
      // posts: data,
      // se nhan ve tat ca cac truong cua data
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
      // xu li khi truyen props vao ham getStatic Props //
    },
  };
};
