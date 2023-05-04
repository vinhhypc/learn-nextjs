import { useRouter } from 'next/router';
import React from 'react';

const ParamPage = () => {
  const router = useRouter();
  const test = JSON.stringify(router.query);
  return (
    <div>
      <h1>Param Page</h1>
      <p>Query : {test}</p>
    </div>
  );
};

export default ParamPage;
