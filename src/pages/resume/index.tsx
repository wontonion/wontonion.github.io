import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Resume(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Resume | ${siteConfig.title}`}
      description="Yisheng Zhu's Resume">
      <main className="container margin-vert--lg">
        <div className="resume-container">
          <iframe
            src="/files/EthanResume.pdf"
            style={{
              width: '100%',
              height: '100vh',
              border: 'none'
            }}
            title="Resume"
          />
        </div>
      </main>
    </Layout>
  );
}