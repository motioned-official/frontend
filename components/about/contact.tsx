import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const Contact: React.FC = () => {
  return (
    <Motioned.container id="about-contact" className="bg-dark/95">
      <Motioned.wrapper className="px-8 lg:px-16 py-28">
        <Motioned.container>
          <div>
            <Motioned.content>
              <h2 className="font-bold font-pop text-5xl md:text-6xl lg:text-7xl text-center text-light mb-4">
                Contact <GradientText />
              </h2>
            </Motioned.content>
            <Motioned.content>
              <p className="font-pop text-lg leading-7 lg:text-xl lg:leading-8 lg:w-max max-w-xl mx-auto text-center mb-8 pb-8 border-b-4 text-light/80 border-light/10">
                In order for us to help answer your quesitons as quick as
                possible, please use the contacts below. If you have a detailed
                & specific question related to the service inquiry, We recommend
                that you contact via our{' '}
                <strong className="underline">direct contact</strong> below.
              </p>
            </Motioned.content>
            <Motioned.content>
              <ul className="max-w-xl mx-auto flex flex-col space-y-6 ">
                <li className="flex flex-col items-center lg:flex-row lg:justify-between w-full space-y-2 lg:space-y-0 text-ocean">
                  <p className="font-bold text-base md:text-lg lg:text-xl text-center lg:text-left">
                    # Service-related consultation request
                  </p>
                  <Link href="/contact">
                    <a className="w-max font-bold px-5 py-3 rounded-xl bg-dark/10 transition-all hover hover:bg-dark/70 font-pop underline">
                      Direct Contact
                    </a>
                  </Link>
                </li>
                <li className="flex flex-col items-center lg:flex-row lg:justify-between w-full space-y-2 lg:space-y-0 text-melon">
                  <p className="font-bold text-base md:text-lg lg:text-xl text-center lg:text-left">
                    # Immedicate Quesitons
                  </p>
                  <a
                    href="mailto:haneulchoi.business@gmail.com"
                    className="w-max font-bold px-5 py-3 rounded-xl bg-dark/10 transition-all hover hover:bg-dark/70 font-pop underline"
                  >
                    Direct Email
                  </a>
                </li>
              </ul>
            </Motioned.content>
          </div>
        </Motioned.container>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Contact;
