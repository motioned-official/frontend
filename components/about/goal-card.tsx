import Motioned from '../motioned';
const GoalCard: React.FC<MotionedGoal> = ({ index, goal, description }) => {
  return (
    <Motioned.content className="">
      <>
        <h4 className="font-bold text-2xl font-sand mb-3 text-dark flex items-center space-x-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-tangerine to-sunflower">
            [{index}]
          </span>
          <span className="capitalize">{goal}</span>
        </h4>
        <p className="text-dark/60 font-sand font-medium leading-8 text-lg lg:text-xl md:leading-8 lg:leading-9">
          {description}
        </p>
      </>
    </Motioned.content>
  );
};
export default GoalCard;
