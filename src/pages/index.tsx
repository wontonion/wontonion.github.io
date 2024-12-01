import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="This is a blog for wontonion">
      {/* <main className="main-container"> */}
        <HomepageHeader />
      {/* </main> */}
    </Layout>
  );
}
