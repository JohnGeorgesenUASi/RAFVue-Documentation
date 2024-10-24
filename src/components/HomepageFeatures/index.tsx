import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Boost Efficiency and Accuracy Instantly with RAF Vue™️',
    Svg: require('@site/static/img/frontpage.svg').default,
    description: (
      <>
        Implementing advanced technology solutions, such as our proprietary software RAF Vue™️, can significantly enhance 
        efficiency and accuracy. Instant insights into chronic code capture and recapture opportunities allow for quick 
        identification of patients with the greatest treatment and financial impacts. With a centralized, patient-level view and 
        automatic calculation of reported and potential RAF scores, RAF Vue™️ generates comprehensive reporting at the patient, 
        provider, and reviewer levels. Best of all, RAF Vue™️ can achieve immediate go-live without requiring EMR integration, 
        reducing the technological burden on your practice. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
