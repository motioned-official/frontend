import reactClassName from 'src/libs/reactClassName';

interface GradientMotionedTextProps {
  query: {
    type?: 'serif' | 'pop' | 'sand' | undefined;
    size?: string;
  };
}
const GradientMotionedText: React.FC<GradientMotionedTextProps> = ({
  query,
}) => {
  return (
    <span
      className={reactClassName(
        'bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400/90 to-yellow-400/75',
        query.type ?? '',
        query.size ?? ''
      )}
    >
      Motioned
    </span>
  );
};
export default GradientMotionedText;
