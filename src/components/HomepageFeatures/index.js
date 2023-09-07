import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Optimize resource allocation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        End the hunt for a tool that gives complete cloud resource visibility. OP's unified interface collects all resource data and fixes missing info with smart tagging.
      </>
    ),
  },
  {
    title: 'Easy cloud governance',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Escape naming inconsistencies by enforcing compliance to your policies. OP standardises naming conventions using discovery and smart tagging - even in existing setups
      </>
    ),
  },
  {
    title: 'Faster incident management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        No need to investigate with multiple tools. OP provides a single interface bringing together relevant data from your tool chain.
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
