import React from 'react';
import { Layout } from 'antd';
import Animation1 from '../components/Animation1';

const { Content } = Layout;

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000000', padding: '15%' }}>
      <Animation1 />
    </div>
  );
}
