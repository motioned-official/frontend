import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-stone-400 font-sand font-medium">
      <section className="flex flex-col items-center jsutify-center py-16">
        <p className="mb-4 text-center">
          <strong>Motioned</strong> &copy; 2022. All rights reserved.
        </p>
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <a
              className="text-2xl transition-all hover lg:hover:text-stone-100"
              href="https://linkedin.com/company/motioned-official"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              className="text-2xl transition-all hover lg:hover:text-stone-100"
              href="https://instagram.com/motioned-official"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              className="text-2xl transition-all hover lg:hover:text-stone-100"
              href="https://github.com/motioned-official"
            >
              <BsGithub />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
export default Footer;
