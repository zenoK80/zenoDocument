// 예: 간단한 카운터 페이지
import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <Layout>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </Layout>
  );
}