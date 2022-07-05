/**
 * @name MotionedProps
 * @type {container : JSX.Element; wrapper: JSX.Element; content: JSX.ELement}
 * @ref 'components/components.d.ts'
 */
declare interface MotionedComponentProps {
    children?: JSX.Element;
    className?: string;
    id?:string;
}
 declare interface MotionedProps {
    container: ({children, className, id} : MotionedComponentProps) => JSX.Element;
    wrapper: ({children, className, id} : MotionedComponentProps) => JSX.Element;
    content: ({children, className, id} : MotionedComponentProps) => JSX.Element
}