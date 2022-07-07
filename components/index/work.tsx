import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import { GrWorkshop, GrBusinessService } from 'react-icons/gr';
import services from '@/db/services';
import ServiceCard from './service-card';
import LinkedTo from '../linked-to';
import { MdWeb } from 'react-icons/md';
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
                  Services that matters to your business.
                </span>
              </h3>
              <div className="flex flex-col space-y-6">
                <Link href="/services">
                  <a className="px-8 py-3 rounded-xl bg-melon/10 text-ocean text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-ocean/20">
                    <span>Our Services</span>
                    <span className="p-2 rounded-xl bg-ocean">
                      <GrBusinessService className="text-light" />
                    </span>
                  </a>
                </Link>
                <Link href="/works">
                  <a className="px-8 py-3 rounded-xl bg-ocean/10 text-melon text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-melon/20">
                    <span>Our Works</span>
                    <span className="p-2 rounded-xl bg-melon">
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
