// import Image, { ImageLoader } from 'next/image';
import Motioned from '../motioned';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
const MemberCard: React.FC<MotionedTeam> = ({
  bio,
  image,
  links,
  name,
  position,
}) => {
  return (
    <Motioned.content className="w-full bg-transparent rounded-xl overflow-hidden transition-all">
      <>
        <img
          className="w-full max-w-sm mx-auto rounded-full transition-all hover lg:hover:shadow-2xl lg:hover:shadow-light mb-4"
          src={image ? image : 'team/No_Image_Profile.png'}
          alt={`${name} profile image`}
        />
        <div className="mb-4 ">
          <h4 className="font-bold font-pop text-2xl lg:text-3xl mb-2 text-dark text-center">
            {name}
          </h4>
          <span className="font-sand text-base lg:text-lg text-dark/50 block text-center">
            {position}
          </span>
        </div>
        {/* <div className="px-8 pb-4">
          <p className="text-lg lg:text-xl leading-7 lg:leading-8 text-dark/60 font-pop">
            {bio}
          </p>
        </div> */}
        {links && (
          <ul className="px-4 bg-light/50 backdrop-blur-md flex justify-center items-center space-x-4 rounded-t-xl transition-all hover lg:hover:bg-light/90">
            {links.github && (
              <li>
                <a
                  className="transition-all text-xl lg:text-2xl lg:hover:opacity-50"
                  href={links.github}
                >
                  <BsGithub />
                </a>
              </li>
            )}
            {links.linkedin && (
              <li>
                <a
                  className="transition-all text-xl lg:text-2xl lg:hover:opacity-50"
                  href={links.linkedin}
                >
                  <BsLinkedin />
                </a>
              </li>
            )}
            {links.personal && (
              <li>
                <a
                  className="transition-all text-lg lg:text-xl lg:hover:opacity-50"
                  href={links.personal}
                >
                  <BsPerson />
                </a>
              </li>
            )}
          </ul>
        )}
      </>
    </Motioned.content>
  );
};
export default MemberCard;
