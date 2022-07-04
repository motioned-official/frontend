import GradientMotionedText from '@/components/gradient-motioned';
import View from '@/components/view';

const HeroText: React.FC = () => {
  return (
    <View id="team-hero" className="">
      <article className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="font-bold font-pop text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4">
          Team <GradientMotionedText query={{}} />
        </h2>
        <p className="font-pop leading-7 md:text-lg lg:text-xl lg:leading-8 mb-4">
          Our great products come from collaborations between talented &
          respectful team members from photographers, designers, project
          managers, to developers.
        </p>
      </article>
    </View>
  );
};
export default HeroText;
