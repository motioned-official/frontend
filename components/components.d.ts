/**
 * @name MotionedComponentProps
 * @type {children:JSX.Element; className: string; id: string}
 * @ref 'components/components.d.ts'
 */
declare interface MotionedComponentProps {
  children?: JSX.Element;
  className?: string;
  id?: string;
}
/**
 * @name MotionedProps
 * @type {container : JSX.Element; wrapper: JSX.Element; content: JSX.ELement}
 * @ref 'components/components.d.ts'
 */
declare interface MotionedProps {
  container: ({
    children,
    className,
    id,
  }: MotionedComponentProps) => JSX.Element;
  wrapper: ({ children, className, id }: MotionedComponentProps) => JSX.Element;
  content: ({ children, className, id }: MotionedComponentProps) => JSX.Element;
}
/**
 * @name MotionedLinkComponentProps
 * @type {text: string; color: {background: string; text: string}; icon: JSX.ELement, href: string}
 * @ref 'components/components.d.ts'
 */
declare interface MotionedLinkComponentProps {
  text: string;
  color: {
    background: string;
    text: string;
  };
  icon?: JSX.Element;
  href: string;
}
