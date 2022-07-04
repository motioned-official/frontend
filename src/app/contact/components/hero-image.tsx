import View from '@/components/view';
import Image from 'next/image';
import MyLogo from 'public/motioned_square_logo.png';
const HeroImage: React.FC = () => {
  return (
    <View id="contact-image" className="">
      <article className="w-full h-full flex flex-col justify-center items-start lg:items-center lg:py-8">
        <article className="w-full max-w-xs mx-auto relative">
          <Image
            src={MyLogo}
            alt="Motioned Gif"
            className="z-0 opacity-90"
            layout="responsive"
          />
        </article>
      </article>
    </View>
  );
};
export default HeroImage;
