import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return <header aria-label="Goblin Quantum Lab hero image" className={styles.heroBanner} />;
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
  const heroImage = useBaseUrl('/img/branding/gql-hero-banner.png');

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Free practical quantum computing education">
      <div
        className={styles.brandedBackdrop}
        style={{backgroundImage: `linear-gradient(180deg, rgba(2, 8, 23, 0.04) 0%, rgba(2, 8, 23, 0.66) 60%, rgba(2, 8, 23, 0.92) 100%), url("${heroImage}")`}}>
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
      </div>
    </Layout>
  );
}
