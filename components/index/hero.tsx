import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import { BsCode } from 'react-icons/bs';
import { MdWeb } from 'react-icons/md';
import LinkedTo from '../linked-to';

const Hero: React.FC = () => {
  return (
    <Motioned.container className="w-full" id="index-hero">
      <Motioned.wrapper className="w-full px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <>
          <Motioned.content className="mb-9">
            <>
              <h2 className="flex flex-col space-y-1 mb-4">
                <span className="text-5xl lg:text-6xl font-sand">
                  With <GradientText />
                </span>
                <span className="font-bold text-6xl lg:text-7xl font-pop">
                  Seek Success
                </span>
              </h2>
              <p className="font-sand font-medium text-2xl leading-9 lg:text-3xl lg:leading-10 max-w-xl">
                Web Services &{' '}
                <span className="inline-block">Open Source Software</span>{' '}
                Development Agency
              </p>
            </>
          </Motioned.content>
          <Motioned.content className="flex flex-col space-y-4 max-w-xs">
            <>
              {' '}
              <LinkedTo
                color={{
                  background: 'bg-dark',
                  text: 'text-light',
                }}
                icon={<MdWeb />}
                text={'Web Services'}
                href={'/services'}
              />
              <LinkedTo
                color={{
                  background: 'bg-dark',
                  text: 'text-light',
                }}
                icon={<BsCode />}
                text={'Open Source Projects'}
                href={'/opensourceprojects'}
              />
            </>
          </Motioned.content>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Hero;
