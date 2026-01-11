import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '배움을 기록합니다.',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // image: '/img/main1.png',
    description: (
      <>
      이론과 실무를 연결하며 배운 것을 정리합니다.<br/>
      기초부터 웹 기술까지 차근차근 남깁니다.
      </>
    ),
  },
  {
    title: '경험을 나눕니다',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    // image: '/img/main2.png',
    description: (
      <>
      현장에서 마주한 문제와 해결 방법을 공유합니다.<br/>
      개발 과정의 인사이트를 기록합니다.
      </>
    ),
  },
  {
    title: '도구를 만듭니다',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    // image: '/img/main3.png',
    description: (
      <>
        직접 구현하며 원리를 배워봅니다<br></br>
        그 과정에서 만든 것들을 공유합니다.<br></br>
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
      {/* <div className="text--center">
        <img
          src={image}
          alt={title}
          className={styles.featureSvg} 
        />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
