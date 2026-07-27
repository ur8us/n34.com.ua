import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Open Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

function PrototypeSummary() {
  return (
    <section className={styles.summary}>
      <div className="container">
        <div className={styles.summaryGrid}>
          <article>
            <h2>Markdown-first structure</h2>
            <p>
              The prototype uses Docusaurus docs pages as the foundation for a
              future company and history wiki.
            </p>
          </article>
          <article>
            <h2>Prepared sections</h2>
            <p>
              Example pages are organized under History, Products, People, and
              Technologies so the information architecture can be reviewed early.
            </p>
          </article>
          <article>
            <h2>No secrets included</h2>
            <p>
              Deployment secrets are documented as future requirements only.
              No passwords, tokens, or private keys are configured here.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Test prototype for a static Markdown-based company and history wiki.">
      <HomepageHeader />
      <main>
        <PrototypeSummary />
      </main>
    </Layout>
  );
}
