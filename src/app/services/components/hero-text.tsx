import GradientMotionedText from '@/components/gradient-motioned';
import View from '@/components/view';
import Link from 'next/link';

const HeroText: React.FC = () => {
  return (
    <View id="services-text" className="w-full">
      <article className="w-full flex flex-col justify-center items-start p-8 lg:px-0">
        <h2 className="font-bold font-pop text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 lg:mb-8 2xl:mb-12">
          Services that <GradientMotionedText query={{}} /> provides{' '}
          <span className="inline-block">for you</span>
        </h2>
        <p className="font-pop leading-7 md:text-lg lg:text-xl lg:leading-8 mb-8">
          <strong>Motioned</strong> provide expertise in the following fields.
          We have numerous experiences & resources to help your business reach
          its goals. If you are not sure where to start, we recommend that you
          contact us via{' '}
          <Link href="/contact">
            <a
              className="font-bold text-blue-500 underline transition-all hover hover:text-blue-400"
              href=""
            >
              talk with us
            </a>
          </Link>{' '}
          and we will give a response to discuss your needs.
        </p>
      </article>
    </View>
  );
};
export default HeroText;
