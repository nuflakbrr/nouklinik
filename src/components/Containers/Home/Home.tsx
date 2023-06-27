import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import TopSection from './components/Top';
import AboutSection from './components/About';
import ServiceSection from './components/Service';
import Facilities from './components/Facilities';
import Doctors from './components/Doctors';
import FAQ from './components/FAQ';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="pt-20">
        <TopSection />
        <AboutSection />
        <ServiceSection />
        <Facilities />
        <Doctors />
        <FAQ />
      </main>
    </>
  );
};

export default ContainerHome;
