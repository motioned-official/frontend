import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import { GrWorkshop, GrBusinessService } from 'react-icons/gr';
import services from '@/db/services';
import ServiceCard from './service-card';
const Work: React.FC = () => {
  return (
    <Motioned.container
      className="w-full min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12"
      id="index-work"
    >
      <>
        <Motioned.container className="w-full h-full flex flex-col justify-center bg-dark/95 text-light lg:col-span-3 xl:col-span-4 p-8 py-28 lg:px-16 lg:rounded-r-2xl">
          <Motioned.content>
            <>
              <h3 className="flex flex-col space-y-1 mb-10">
                <GradientText className="text-5xl md:text-6xl lg:text-7xl font-pop font-bold " />
                <span className="text-2xl md:text-3xl lg:text-4xl capitalize lg:leading-[3rem]">
                  Services that matters to your customers.
                </span>
              </h3>
              <div className="flex flex-col space-y-6">
                <Link href="/services">
                  <a className="px-8 py-3 rounded-xl bg-sunflower/10 text-tangerine text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-sunflower/20">
                    <span>Our Services</span>
                    <span className="p-2 rounded-xl bg-tangerine">
                      <GrBusinessService className="text-light" />
                    </span>
                  </a>
                </Link>
                <Link href="/works">
                  <a className="px-8 py-3 rounded-xl bg-tangerine/10 text-sunflower text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-tangerine/20">
                    <span>Our Works</span>
                    <span className="p-2 rounded-xl bg-sunflower">
                      <GrWorkshop className="text-light" />
                    </span>
                  </a>
                </Link>
              </div>
            </>
          </Motioned.content>
        </Motioned.container>
        <Motioned.container className="w-full h-full flex flex-col justify-center lg:col-span-5 xl:col-span-8 p-8 lg:px-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard {...service} key={index} />
            ))}
          </div>
        </Motioned.container>
      </>
    </Motioned.container>
  );
};
export default Work;
