import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/learning-pathways">
            View Pathways
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description}) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <div className={styles.featureCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Free practical quantum computing education">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <FeatureCard
                title="Quantum Foundations"
                description="Learn the fundamental principles of quantum mechanics and quantum computing from the ground up."
              />
              <FeatureCard
                title="Practical Labs"
                description="Hands-on simulation labs designed to reinforce learning with reproducible experiments."
              />
              <FeatureCard
                title="Competency Checks"
                description="Structured assessments to verify your understanding and track progress."
              />
              <FeatureCard
                title="Report Writing"
                description="Develop disciplined experiment reporting skills with templates and guidance."
              />
            </div>
          </div>
        </section>
        <section className={styles.info}>
          <div className="container">
            <div className={styles.infoContent}>
              <h2>About Goblin Quantum Lab</h2>
              <p>
                Goblin Quantum Lab is a free and open-source public quantum computing education project. 
                It teaches quantum computing through structured learning pathways, practical simulation labs, 
                competency checks, report-writing tasks, and safe experiment discipline.
              </p>
              <div className={styles.disclaimer}>
                <strong>Important:</strong> This is a free public education project. It is not a university, 
                accredited certification provider, or production research system. Formal certificates are not 
                currently issued. Future course materials may be expanded, revised, or migrated to another platform.
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
