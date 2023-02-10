import { FC } from 'react';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import TopSection from './components/Top';
import ScheduleSection from './components/Schedule';

type ContainerDetailDoctorsProps = {
  data: any;
};

const ContainerDetailDoctors: FC<ContainerDetailDoctorsProps> = ({ data }) => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <TopSection data={data} />
        <ScheduleSection data={data} />
      </main>

      <Footer />
    </>
  );
};

export default ContainerDetailDoctors;
