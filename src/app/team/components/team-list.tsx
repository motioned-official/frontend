import HaneulChoi from 'public/team/haneul_choi.png';
import MemberCard from './member-card';
const TeamList: React.FC = () => {
  return (
    <article
      id="team-list"
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <MemberCard
        name="Haneul Choi"
        position="Founder & Lead Developer"
        img={HaneulChoi}
        links={{
          github: 'https://github.com/haneulab',
          linkedin: 'https://linkedin.com/in/haneulab',
        }}
      />
    </article>
  );
};
export default TeamList;
