import { reactClassName } from '../libs';

const GradientText: React.FC<MotionedComponentProps> = ({
  className,
  id,
  children,
}) => {
  return (
    <span
      className={reactClassName(
        `bg-clip-text text-transparent bg-gradient-to-r from-ocean to-melon`,
        className ? className : ''
      )}
    >
      {children ? children : 'Motioned'}
    </span>
  );
};
export default GradientText;
