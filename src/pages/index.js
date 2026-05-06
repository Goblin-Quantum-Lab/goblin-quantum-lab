import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return <header aria-label="Goblin Quantum Lab hero image" className={styles.heroBanner} />;
}

function CourseCard({
  courseCode,
  title,
  level,
  status,
  accessType,
  description,
  requiredAccount,
  buttonText,
  to,
}) {
  return (
    <div className={clsx('col col--6', styles.courseColumn)}>
      <article className={styles.courseCard}>
        <div className={styles.courseMeta}>
          <span>{courseCode}</span>
          <span>{status}</span>
        </div>
        <h3>{title}</h3>
        <dl>
          <div>
            <dt>Level</dt>
            <dd>{level}</dd>
          </div>
          <div>
            <dt>Access type</dt>
            <dd>{accessType}</dd>
          </div>
          <div>
            <dt>Required account</dt>
            <dd>{requiredAccount}</dd>
          </div>
        </dl>
        <p>{description}</p>
        <Link className={styles.courseButton} to={to}>
          {buttonText}
        </Link>
      </article>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/branding/gql-hero-banner.png');

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open support subjects and enrollment-bound quantum courses">
      <div
        className={styles.brandedBackdrop}
        style={{backgroundImage: `linear-gradient(180deg, rgba(2, 8, 23, 0.04) 0%, rgba(2, 8, 23, 0.66) 60%, rgba(2, 8, 23, 0.92) 100%), url("${heroImage}")`}}>
        <HomepageHeader />
        <main>
          <section className={styles.catalogueIntro}>
            <div className="container">
              <p>
                Goblin Quantum Lab provides open support subjects and enrollment-bound quantum courses. Support
                materials are public. Full course materials, labs, assignments, and assessed work are released
                only through the enrolled learner process.
              </p>
              <p className={styles.boundaryText}>
                Protected course material is not stored in the public repository.
              </p>
            </div>
          </section>
          <section className={styles.courseSection}>
            <div className="container">
              <div className="row">
                <CourseCard
                  courseCode="SS"
                  title="Support Subjects"
                  level="Beginner support"
                  status="Open"
                  accessType="Public"
                  description="Standalone helper subjects for GitHub workflow, Python, probability, documentation reading, report writing, and reproducibility basics."
                  requiredAccount="None for reading"
                  buttonText="Open subject"
                  to="/docs/support-subjects"
                />
                <CourseCard
                  courseCode="QF-101"
                  title="Quantum Thinking"
                  level="Beginner"
                  status="Enrollment Required"
                  accessType="GitHub-account-bound enrolled course"
                  description="QF-101 introduces beginner quantum experiment literacy: qubits, measurement, probability, shots, counts, simulator discipline, and careful reporting. Full course materials are released only through the enrolled learner process."
                  requiredAccount="GitHub account"
                  buttonText="View enrollment overview"
                  to="/docs/quantum-foundations/qf-101-quantum-thinking"
                />
                <CourseCard
                  courseCode="QP-101"
                  title="Quantum Programming Foundations"
                  level="Beginner / Intermediate"
                  status="Enrollment Required / Prerequisite Gated"
                  accessType="GitHub-account-bound enrolled course"
                  description="Future enrolled course for learners who have completed the required foundation sequence and are ready for programming practice."
                  requiredAccount="GitHub account"
                  buttonText="View requirements"
                  to="/docs/course-access/public-vs-enrolled"
                />
                <CourseCard
                  courseCode="QA-101"
                  title="Quantum Algorithms Foundations"
                  level="Intermediate"
                  status="Enrollment Required / Prerequisite Gated"
                  accessType="GitHub-account-bound enrolled course"
                  description="Future enrolled course for learners moving from programming practice into careful algorithm literacy."
                  requiredAccount="GitHub account"
                  buttonText="View requirements"
                  to="/docs/course-access/public-vs-enrolled"
                />
              </div>
            </div>
          </section>
          <section className={styles.info}>
            <div className="container">
              <div className={styles.infoContent}>
                <h2>About Goblin Quantum Lab</h2>
                <p>
                  Goblin Quantum Lab is a public catalogue and learning gateway for practical quantum computing
                  education. Open Support Subjects are available to all visitors. Enrollment-required courses use
                  a GitHub-account-bound learner process.
                </p>
                <div className={styles.disclaimer}>
                  <strong>Important:</strong> This is a free public education project. It is not a university,
                  accredited certification provider, production research system, or official credential issuer.
                  Formal certificates are not issued.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
