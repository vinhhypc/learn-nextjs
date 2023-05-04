import { useRouter } from 'next/router';
import React from 'react';
const About = () => {
  const router = useRouter();
  console.log('About router', router.query);
  return <div>about pages</div>;
};
export default About;
export async function getServerSideProps() {
  return {
    props: {},
  };
}
