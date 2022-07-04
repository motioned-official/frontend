import GradientMotionedText from '@/components/gradient-motioned';
import View from '@/components/view';
import Link from 'next/link';

const HeroText: React.FC = () => {
  return (
    <View id="index-hero" className="">
      <article className="w-full h-full flex flex-col justify-center items-start">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 font-pop">
          Seek Success With <GradientMotionedText query={{}} />
        </h1>
        <p className="leading-8 font-sand font-medium text-lg md:text-xl lg:text-2xl md:leading-9 mb-10">
          From web design, engineering, to maintenance services for your
          business goals.
        </p>
        <div>
          <Link href="/services">
            <a className="px-5 py-3 rounded-xl bg-gradient-to-br from-red-400 to-orange-400 text-white font-pop font-medium text-lg transition-all hover lg:hover:bg-gradient-to-l lg:hover:from-red-500 lg:hover:to-orange-500 shadow-xl lg:hover:shadow-sm">
              Get Started
            </a>
          </Link>
        </div>
      </article>
    </View>
  );
};
export default HeroText;
