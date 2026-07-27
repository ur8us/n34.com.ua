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
        <p className={styles.notice}>Prototype - not yet the official RigExpert company history</p>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about/">
            Open Knowledge Base
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
            <h2>Markdown-based knowledge base</h2>
            <p>
              This experimental site uses Markdown articles to organize
              technical notes, products, people, sources, and history.
            </p>
          </article>
          <article>
            <h2>Maintained in GitHub</h2>
            <p>
              Content changes are reviewed in the repository, built by
              Docusaurus, and deployed automatically after the production build
              succeeds.
            </p>
          </article>
          <article>
            <h2>Ready for collaboration</h2>
            <p>
              The project is being prepared for collaborative editing and later
              AI-assisted editorial workflows while keeping source-backed
              writing as the standard.
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
      description="Experimental Markdown-based knowledge base for technical notes, products, people, and history.">
      <HomepageHeader />
      <main>
        <PrototypeSummary />
      </main>
    </Layout>
  );
}
