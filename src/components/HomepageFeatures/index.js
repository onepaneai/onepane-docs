import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Monitor Smarter and Faster',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        No need to investigate with multiple tools. OP provides a single interface bringing together relevant data from your tool chain.
      </>
    ),
  },
  {
    title: 'Unified view of incidents',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Escape naming inconsistencies enforce gover- nance with OP's standardised naming via semi-automated discovery and smart tagging in existing setups.
      </>
    ),
  },
  {
    title: 'Overview for your cloud',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        End the hunt for a tool that give complete cloud resource visibility OP's unified interface collects all resource data and fixes missing info with smart tagging.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
