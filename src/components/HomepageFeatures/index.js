import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Created by your eyes',
    Svg: require('@site/static/img/undraw_adventure_re_ncqp.svg').default,
    description: (
      <>
        All NFTs are minted based on the location of where you are in the nature reservation area.
      </>
    ),
  },
  {
    title: 'Ever-evolving NFTs',
    Svg: require('@site/static/img/undraw_season_change_f99v.svg').default,
    description: (
      <>
        Every NFT evolves over time based on the quality of air, water and fauna of the area
      </>
    ),
  },
  {
    title: 'Created Together',
    Svg: require('@site/static/img/undraw_team_work_k-80-m.svg').default,
    description: (
      <>
        Orchid works together with other blockchains, such as <a href="https://www.planetwatch.io/">PlantWatch</a> in order to get to know more about the nature you're living in.
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
