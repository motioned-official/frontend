import View from '@/components/view';
import Image from 'next/image';
import MyGif from 'public/motioned_gif.gif';
const HeroImage: React.FC = () => {
  return (
    <View id="index-image" className="">
      <article className="w-full max-w-md mx-auto relative">
        <span className="absolute z-10 p-4 rounded-lg flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <strong className="relative z-10 font-pop text-9xl text-white p-8 ">
            M
          </strong>
          <span className="absolute z-20 backdrop-blur-sm py-10 font-bold font-pop text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-orange-500/5">
            motioned
          </span>
        </span>

        <Image
          src={MyGif}
          alt="Motioned Gif"
          className="z-0 opacity-0"
          layout="responsive"
        />
      </article>
    </View>
  );
};
export default HeroImage;
