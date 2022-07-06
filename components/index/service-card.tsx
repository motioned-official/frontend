import { reactClassName } from '@/libs/index';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Motioned from '../motioned';

const ServiceCard: React.FC<MotionedService> = ({
  brief,
  title,
  type,
  url,
}) => {
  const [viewMore, setViewMore] = useState<boolean>(false);
  const onClickViewMore = () => {
    setViewMore((cur) => !cur);
  };
  const router = useRouter();
  const onCardClickRouterPush = (to: string) => {
    router.push(to);
  };
  return (
    <Motioned.content className="w-full h-full flex flex-col rounded-xl bg-light/10 backdrop-blur-md text-dark/50 lg:hover:text-dark/70 py-8 transition-all hover lg:hover:bg-dark/10 cursor-pointer">
      <>
        <article
          onClick={() => onCardClickRouterPush(url)}
          className="px-8 w-full h-full mb-4"
        >
          <span className="text-dark/30 capitalize text-base lg:text-lg">
            {type}
          </span>
          <h4 className="text-2xl lg:text-3xl font-medium font-pop capitalize mb-4">
            {title}
          </h4>
          <p className="text-lg lg:text-xl">
            {viewMore ? brief : brief.slice(0, 50) + '...'}
          </p>
        </article>
        <article className="px-8 w-full h-full flex flex-col justify-start">
          <div className="w-full h-full flex flex-col justify-end items-start">
            <button
              onClick={onClickViewMore}
              className={reactClassName(
                'transition-all px-5 py-2 rounded-full transform hover lg:hover:translate-x-1 lg:hover:border-l-8 lg:hover:text-dark border-dark/10 font-pop font-medium',
                viewMore
                  ? 'bg-tangerine/70 hover:bg-tangerine/80'
                  : 'bg-ocean/70 hover:bg-ocean'
              )}
            >
              Read {viewMore ? 'Less' : 'More'}
            </button>
          </div>
        </article>
      </>
    </Motioned.content>
  );
};
export default ServiceCard;
