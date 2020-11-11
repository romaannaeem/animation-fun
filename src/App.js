import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';

import Cursor from './components/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
