import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <h1 className="font-medium px-8 py-4">
      <Link href="/">
        <a>
          <span className="text-4xl md:text-5xl lg:text-6xl">M</span>
          <span className="text-base md:text-lg lg:text-xl">otioned</span>
        </a>
      </Link>
    </h1>
  );
};
export default Logo;
