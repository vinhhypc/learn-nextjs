import { GetStaticPathsContext, GetStaticProps } from 'next';
import React from 'react';
import { getServerSideProps } from '../about';

export interface PostHomeList {
  posts: any[];
}
const PostList = ({ posts }: PostHomeList) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
// getStaticProps khong dung chung duoc vs getServerSideProps
export const getStaticProps: GetStaticProps<PostHomeList> = async (
  context: GetStaticPathsContext
) => {
  // server -side ; build-time//
  // co the fetch data tu phia server//
  const res = await fetch('https://test-one-zeta-99.vercel.app/services');
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
