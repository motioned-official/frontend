import View from '@/components/view';
import Link from 'next/link';
import WorkCard from './work-card';

const PreviousWorks: React.FC = () => {
  return (
    <View id="services-previous-works" className="w-full">
      <article className="px-8 lg:px-0 py-16 w-full mb-28">
        <h4 className="font-pop text-2xl font-medium text-stone-600 mb-8 text-center ">
          # See Previous Work
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WorkCard
            client="Almond Haus"
            type="business website"
            color="orange-400"
            href="/works/1"
          />
          <WorkCard
            client="Yuchan Shokudo"
            type="business website"
            color="red-500"
            href="/works/2"
          />
          <WorkCard
            client="Uniround"
            type="web service"
            color="teal-400"
            href="/works/3"
          />
        </ul>
      </article>
    </View>
  );
};
export default PreviousWorks;
