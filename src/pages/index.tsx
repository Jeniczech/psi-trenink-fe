import * as React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Logo } from '../components/Logo';

const IndexPage = () => (
  <Layout>
    <SEO title="Domů" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Logo />
  </Layout>
);

export default IndexPage;
