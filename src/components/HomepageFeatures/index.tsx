import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
  title: string;
  Image: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: JSX.Element;
};

const ImageComponent: React.FC<{ className:string, Image: React.ComponentType<React.ComponentProps<'svg'>>| string, title: string }> = 
({ Image, title, className }) => {
  const { i18n: { currentLocale } } = useDocusaurusContext();

  if (typeof Image === 'string') {
    return <img src={Image} 
      className={className} alt={title} />;
  }
  const SVG = Image as React.ComponentType<React.ComponentProps<'svg'>>
  return <Image className={className}  role="img"  />;
};


const FeatureList: FeatureItem[] = [
  {
    title: translate(
            {
              message: 'SubCategory1Title',
              // Optional
              id: 'home.subcategory1.title',
              description: 'The home page category 1 title',
            },
            {},
          ),
    Image: "/img/MECCertificateIcon.jpg",
    description: (
      <>
        {translate(
            {
              message: 'SubCategory1Description',
              id: 'home.subcategory1.description',
              description: 'The home page category 1 description',
            },
            {}
            )}
      </>
    ),
  },
  {
    title: translate(
            {
              message: 'SubCategory2Title',
              // Optional
              id: 'home.subcategory2.title',
              description: 'The home page category 2 title',
            },
            {},
          ),
    Image: "/img/MEC_navigate.jpg",
    description: (
      <>{translate(
            {
              message: 'SubCategory2Description',
              id: 'home.subcategory2.description',
              description: 'The home page category 1 description',
            },
            {}
            )}
      </>
    )
  },
  {
    title: translate(
            {
              message: 'SubCategory3Title',
              // Optional
              id: 'home.subcategory3.title',
              description: 'The home page category 3 title',
            },
            {},
          ),
    Image: "/img/MEC_Verify.png",
    description: (
      <>{translate(
            {
              message: 'SubCategory3Description',
              id: 'home.subcategory3.description',
              description: 'The home page category 1 description',
            },
            {}
            )}
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ImageComponent className={styles.featureIcon}  Image={Image} title={title} />
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
