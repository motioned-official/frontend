import { motion, Variants } from 'framer-motion';

const ContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10.5,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Content: React.FC<MotionedComponentProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.55, type: 'spring' }}
      viewport={{ once: true }}
      variants={ContentVariants}
      className={className ? className : ''}
      id={id ? id : ''}
    >
      {children}
    </motion.div>
  );
};
export default Content;
