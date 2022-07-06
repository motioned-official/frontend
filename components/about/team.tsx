import goals from '@/db/goals';
import teams from '@/db/team';
import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import GoalCard from './goal-card';
import MemberCard from './member-card';

const Team: React.FC = () => {
  return (
    <Motioned.container
      id="about-team"
      className="w-full bg-light flex flex-col justify-center"
    >
      <Motioned.wrapper className="w-full flex flex-col space-y-16">
        <>
          <Motioned.container className="flex flex-col justify-center">
            <Motioned.wrapper className="px-8 lg:px-16 py-16 max-w-6xl mx-auto flex flex-col justify-center lg:rounded-t-xl bg-gradient-to-b from-melon via-ocean">
              <>
                <Motioned.content>
                  <>
                    <h3 className="font-pop text-5xl lg:text-6xl xl:text-7xl text-center mb-4 lg:mb-6 font-bold text-light">
                      Our Team
                    </h3>
                    <p className="text-light/90 font-medium text-sand text-xl leading-8 lg:text-2xl lg:leading-10 text-center mb-8">
                      We are dedicated to provide our client&apos; scaleable &
                      sustainable web services for their businesses as
                      efficiently and productively as they need. We bring our
                      own expertise in each field and collaborate at all times
                      to maximize our workflows.
                    </p>
                    <Motioned.content className="w-full flex items-center">
                      <Link href="/works">
                        <a className="mx-auto px-8 py-3 rounded-xl bg-dark text-light shadow-md font-sand font-bold text-lg lg:text-xl transition-all hover lg:hover:bg-dark/70 transform lg:hover:translate-x-2">
                          Here Goes Our Works.
                        </a>
                      </Link>
                    </Motioned.content>
                  </>
                </Motioned.content>
              </>
            </Motioned.wrapper>
          </Motioned.container>
          <Motioned.container className="w-full flex flex-col">
            <Motioned.wrapper className="w-full max-w-6xl mx-auto px-8 lg:px-0">
              <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {teams.map((team, index) => (
                  <MemberCard {...team} key={index} />
                ))}
              </ul>
            </Motioned.wrapper>
          </Motioned.container>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Team;
