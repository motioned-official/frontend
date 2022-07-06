import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';

const MainlingList: React.FC = () => {
  return (
    <Motioned.container className="w-full bg-light" id="index-mailing-list">
      <Motioned.wrapper className="w-full px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <>
          <Motioned.content className="mb-16">
            <>
              <h3 className="text-center text-3xl font-bold font-pop text-dark/90 mb-4">
                # Get In <GradientText /> Mailing List.
              </h3>
              <p className="text-center text-xl lg:text-2xl text-dark/50">
                Subscribe to our mailing list and get updates on our future
                product introduction & updates.
              </p>
            </>
          </Motioned.content>
          <Motioned.content>
            <>
              <form className="flex flex-col space-y-6 border rounded-xl overflow-hidden p-8 max-w-xl mx-auto font-sand bg-light">
                <article className="flex flex-col space-y-2">
                  <label htmlFor="useremail" className="font-medium text-xl">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 rounded-lg border font-semibold"
                  />
                </article>
                <article className="flex flex-col space-y-2">
                  <label htmlFor="username" className="font-medium text-xl">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 rounded-lg border font-semibold"
                  />
                </article>
                <article className="flex flex-col space-y-2">
                  <input
                    type="submit"
                    className="px-3 py-3 rounded-lg font-bold bg-dark/90 text-light transition-all hover hover:bg-dark/70 cursor-pointer"
                    value="Subscribe Now."
                  />
                </article>
              </form>
              <p className="mt-8 text-center font-pop text-lg leading-8">
                If you have a specific quesiton or inquiry, please contact us
                directly via{' '}
                <Link href="/contact">
                  <a className="text-ocean inline-block font-bold font-sand transition-all hover hover:text-blue-500">
                    Contact
                  </a>
                </Link>
              </p>
            </>
          </Motioned.content>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default MainlingList;
