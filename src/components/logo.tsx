import Link from 'next/link';

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <a className={className}>
        <span className="text-3xl md:text-4xl lg:text-5xl">M</span>
      </a>
    </Link>
  );
};
export default Logo;
