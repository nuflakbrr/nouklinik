import { FC } from 'react';

import TopSection from './components/Top';
import ScheduleSection from './components/Schedule';

type ContainerDetailDoctorsProps = {
  data: any;
};

const ContainerDetailDoctors: FC<ContainerDetailDoctorsProps> = ({ data }) => {
  return (
    <>
      <main className="pt-20">
        <TopSection data={data} />
        <ScheduleSection data={data} />
      </main>
    </>
  );
};

export default ContainerDetailDoctors;
