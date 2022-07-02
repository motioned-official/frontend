import Image from 'next/image';
import Link from 'next/link';
import MyGif from 'public/motioned_gif.gif';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
const Hero: React.FC = () => {
  return (
    <section className="w-full relative max-w-6xl mx-auto p-8 py-28 lg:px-0 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center">
      <article className="w-full h-full flex flex-col justify-center items-start">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-2 font-pop">
          Seek Success With{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400">
            Motioned.
          </span>
        </h1>
        <p className="leading-7 font-sand font-medium text-lg md:text-xl lg:text-2xl mb-8">
          From web design, engineering, to maintenance services for your
          business goals.
        </p>
        <div>
          <Link href="/services">
            <a className="px-5 py-3 rounded-xl bg-gradient-to-br from-red-400 to-orange-400 text-white font-pop font-medium text-lg transition-all hover lg:hover:bg-gradient-to-l lg:hover:from-red-500 lg:hover:to-orange-500 shadow-xl lg:hover:shadow-sm">
              Get Started
            </a>
          </Link>
        </div>
      </article>
      <article className="w-full max-w-md mx-auto relative">
        <span className="absolute z-10 p-4 rounded-lg flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <strong className="font-pop text-9xl text-white p-8 ">M</strong>
        </span>
        <Image
          src={MyGif}
          alt="Motioned Gif"
          className="z-0 opacity-30"
          layout="responsive"
        />
      </article>
      <footer className="fixed w-full bottom-0 left-0 text-stone-400 font-sand font-medium pb-8 lg:pb-16">
        <p className="mb-4 lg:mb-2 text-center">
          <strong>Motioned</strong> &copy; 2022. All rights reserved.
        </p>
        <ul className="flex items-center justify-center space-x-2">
          <li>
            <a
              className="text-2xl transition-all hover hover:text-blue-500"
              href="https://linkedin.com/company/motioned-official"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              className="text-2xl transition-all hover hover:text-black"
              href="https://github.com/motioned-official"
            >
              <BsGithub />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};
export default Hero;
