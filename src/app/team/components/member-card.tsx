import View from '@/components/view';
import Image, { StaticImageData } from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
interface MemberCardProps {
  img: string | StaticImageData;
  name: string;
  position: string;
  links: {
    github?: string;
    linkedin?: string;
    personal?: string;
  };
}

const MemberCard: React.FC<MemberCardProps> = ({
  img,
  name,
  position,
  links,
}) => {
  return (
    <View id={`member-card-for-${name}`} className="">
      <article className="w-full max-w-xs mx-auto sm:mx-0 relative">
        <article className="absolute top-0 left-0 w-full rounded-full ease-in-out transform scale-95 lg:hover:scale-100 h-full bg-gradient-to-r from-orange-400/0 to-red-400/0 lg:hover:from-orange-400/70 lg:hover:to-red-400/70 z-10 transition-all text-stone-100/0 lg:hover:text-stone-100 flex flex-col justify-center items-center cursor-pointer">
          <p className="capitalize">{position}</p>
          <h3 className="font-pop text-2xl font-bold mb-4 pb-4">{name}</h3>
          <ul className="flex items-center space-x-2">
            {links.linkedin && (
              <a href={links.linkedin}>
                <BsLinkedin className="text-xl lg:text-2xl transition-all transform hover hover:rotate-12" />
              </a>
            )}
            {links.github && (
              <a href={links.github}>
                <BsGithub className="text-xl lg:text-2xl transition-all transform hover hover:rotate-12" />
              </a>
            )}
          </ul>
        </article>
        <Image
          src={img}
          alt={`${name} is a ${position} at Team Motioned.`}
          className="-z-10 opacity-75 transition-all hover hover:opacity-100 relative lg:rounded-full"
          layout="responsive"
        />
        <article className="mt-8 w-full sm:mx-0 rounded-full ease-in-out transition-all flex lg:hidden flex-col justify-center items-center">
          <p className="capitalize">{position}</p>
          <h3 className="font-pop text-2xl font-bold mb-2">{name}</h3>
          <ul className="flex items-center space-x-2">
            {links.linkedin && (
              <a href="https://linkedin.com/in/haneulab">
                <BsLinkedin className="text-xl lg:text-2xl transition-all transform hover hover:rotate-12" />
              </a>
            )}
            {links.github && (
              <a href="https://github.com/in/haneulab">
                <BsGithub className="text-xl lg:text-2xl transition-all transform hover hover:rotate-12" />
              </a>
            )}
          </ul>
        </article>
      </article>
    </View>
  );
};

export default MemberCard;
