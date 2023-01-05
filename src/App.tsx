import React from 'react';
import './App.css';
import { Header } from './components/Header';
import Layout from './components/Layout';
import { HomePage } from './components/HomePage';

export interface Page {
  title: string;
  content: React.ReactNode;
  href: string;
}

const pages: Page[] = [
  {
    title: 'About Product',
    content: 'About',
    href:'#'
  },
  {
    title: 'About us',
    content: 'About',
    href:'#about'
  },
  {
    title: 'Buy here',
    content: 'Product + Payment flow',
    href:'#buyhere'
  },
  {
    title: 'Contact us',
    content: 'contact form',
    href:'#contactus'
  },
]

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header pages={pages} />
        <HomePage pages={pages} />
      </Layout>
    </div>
  );
}

export default App;
