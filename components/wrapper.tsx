const Wrapper : React.FC<MotionedComponentProps> = ({children, className, id}) => {
    return (
        <section className={className ? className : ''} id={id ? id : ''}>
            {children}
        </section>
    )
}
export default Wrapper;