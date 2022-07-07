import Link from 'next/link';
import { reactClassName } from '../libs';

const LinkedTo: React.FC<MotionedLinkComponentProps> = ({
  icon,
  text,
  color,
  href,
}) => {
  return href.includes('http') ? (
    <a
      href={href}
      className={reactClassName(
        'inline-flex justify-between items-center px-8 py-3 rounded-xl shadow-md font-sand font-bold text-lg lg:text-xl transition-all hover transform lg:hover:translate-x-2',
        `${color.background} ${`lg:hover:` + `${color.background}` + `/70`}`,
        `${color.text}`
      )}
    >
      <span>{text}</span>
      {icon && <span className="text-2xl">{icon}</span>}
    </a>
  ) : (
    <Link href={href}>
      <a
        className={reactClassName(
          'inline-flex justify-between items-center px-8 py-3 rounded-xl shadow-md font-sand font-bold text-lg lg:text-xl transition-all hover transform lg:hover:translate-x-2',
          `${color.background} ${`lg:hover:` + `${color.background}` + `/70`}`,
          `${color.text}`
        )}
      >
        <span>{text}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </a>
    </Link>
  );
};
export default LinkedTo;
