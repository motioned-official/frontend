import { motion, Variants } from 'framer-motion';

interface ViewProps {
  id: string;
  className: string;
  children: JSX.Element;
}

const ViewVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const View: React.FC<ViewProps> = ({ children, className, id }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 1,
        type: 'spring',
        bounce: 0.15,
        damping: 10,
      }}
      variants={ViewVariants}
      viewport={{ once: true }}
      id={id}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default View;
