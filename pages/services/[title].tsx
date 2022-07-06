import Motioned from '@/components/motioned';
import services from '@/db/services';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MotionedServieSpecific: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;
  const [serviceFor, setServiceFor] = useState<MotionedService>(
    {} as MotionedService
  );

  useEffect(() => {
    setServiceFor(
      services.find(
        (service) => service.title.split(' ').join('') === title
      ) as MotionedService
    );
  }, [title]);
  return serviceFor ? (
    <Motioned.container
      id={title ? `service-title-${title}` : ''}
      className="w-full h-screen bg-dark text-light flex flex-col justify-center"
      //   bg-gradient-to-br from-sunflower via-melon to-ocean
    >
      <Motioned.wrapper className="px-8 lg:px-16 py-28">
        <Motioned.content>
          <>
            <h3 className="text-center font-bold font-pop text-4xl md:text-5xl lg:text-6xl capitalize mb-4">
              {serviceFor.title}
            </h3>
            <p className="text-center text-lg lg:text-xl mb-4 capitalize text-melon">
              {serviceFor.type}
            </p>
            <p className="text-center text-xl leading-8 lg:text-3xl lg:leading-9">
              {serviceFor.brief}
            </p>
          </>
        </Motioned.content>
      </Motioned.wrapper>
    </Motioned.container>
  ) : (
    <></>
  );
};
export default MotionedServieSpecific;
