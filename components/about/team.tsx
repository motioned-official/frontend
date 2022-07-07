import goals from '@/db/goals';
import teams from '@/db/team';
import Link from 'next/link';
import GradientText from '../gradient-text';
import LinkedTo from '../linked-to';
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
            <Motioned.wrapper className="px-8 lg:px-16 py-16 max-w-6xl mx-auto flex flex-col justify-center lg:rounded-t-xl bg-gradient-to-b from-melon/30 via-ocean/10">
              <>
                <Motioned.content className="flex flex-col items-center lg:items-start">
                  <>
                    <h3 className="font-pop text-5xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6 font-bold text-dark">
                      Our Team
                    </h3>
                    <p className="text-dark/60 text-center lg:text-left font-medium text-sand text-xl leading-8 lg:text-2xl lg:leading-10 mb-8">
                      We are dedicated to provide our client&apos; scaleable &
                      sustainable web services for their businesses as
                      efficiently and productively as they need. We bring our
                      own expertise in each field and collaborate at all times
                      to maximize our workflows.
                    </p>
                    <Motioned.content className="w-full flex flex-col items-center lg:items-start">
                      <LinkedTo
                        href={'/works'}
                        color={{
                          background: 'bg-dark',
                          text: 'text-light',
                        }}
                        text={'Here Goes Our Works.'}
                      />
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
