import Link from 'next/link';
import ServiceCard from './components/service-card';
import { Services } from './static';
import View from '@/components/view';
const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto min-h-screen grid grid-cols-1 pt-28 gap-8 lg:gap-12 place-content-center">
      <View id="services-hero" className="w-full">
        <article className="w-full flex flex-col justify-center items-start p-8 lg:px-0">
          <h2 className="font-bold font-pop text-2xl mb-4">
            Services that{' '}
            <span className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500/75 to-yellow-500/50">
              Motioned
            </span>{' '}
            provides for you
          </h2>
          <p className="leading-7 text-lg">
            <strong>Motioned</strong> provide expertise in the following fields.
            We have numerous experiences & resources to help your business reach
            its goals. If you are not sure where to start, we recommend that you
            contact us via{' '}
            <a
              className="font-bold text-blue-500 underline transition-all hover hover:text-blue-400"
              href=""
            >
              talk with us
            </a>{' '}
            and we will give a response to discuss your needs.
          </p>
        </article>
      </View>
      <View id="services-cards" className="w-full">
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 lg:px-0">
          {Services.map((service, index) => (
            <View
              key={index}
              id={`service-card-${service.title}`}
              className="w-full"
            >
              <ServiceCard {...service} />
            </View>
          ))}
        </article>
      </View>
      <View id="services-previous-works" className="w-full">
        <article className=" px-8 py-16 w-full mb-28">
          <h4 className="font-pop text-2xl font-medium text-stone-600 mb-8 text-center ">
            # See Previous Work
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li>
              <Link href="/works/1">
                <a className="capitalize flex flex-col space-y-1 p-4 bg-white/20 transition-all hover hover:bg-black/5 border-l-8 border-orange-400/50">
                  <span className="w-full flex justify-start space-x-2">
                    <span>client</span>
                    <strong>Almond Haus</strong>
                  </span>
                  <span className="w-full flex justify-start space-x-2">
                    <span>Type</span>
                    <strong>business website</strong>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works/2">
                <a className="capitalize flex flex-col space-y-1 p-4 bg-white/20 transition-all hover hover:bg-black/5 border-l-8 border-red-400/50">
                  <span className="w-full flex justify-start space-x-2">
                    <span>client</span>
                    <strong>Yuchan Shokudo</strong>
                  </span>
                  <span className="w-full flex justify-start space-x-2">
                    <span>Type</span>
                    <strong>business website</strong>
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/works/1">
                <a className="capitalize flex flex-col space-y-1 p-4 bg-white/20 transition-all hover hover:bg-black/5 border-l-8 border-yellow-400/50">
                  <span className="w-full flex justify-start space-x-2">
                    <span>client</span>
                    <strong>Uniround</strong>
                  </span>
                  <span className="w-full flex justify-start space-x-2">
                    <span>Type</span>
                    <strong>web servcie</strong>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </article>
      </View>
    </section>
  );
};
export default Hero;
