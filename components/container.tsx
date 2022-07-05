const Container : React.FC<MotionedComponentProps> = ({children, className, id}) => {
    return (
        <div className={className ? className : ''} id={id ? id : ''}>
            {children}
        </div>
    )
}
export default Container;