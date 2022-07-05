import Container from "./container";
import Content from "./content";
import Wrapper from "./wrapper";

const Motioned : MotionedProps = {
    container: ({children, className, id}) => <Container className={className} id={id}>{children}</Container>,
    wrapper: ({children, className, id}) => <Wrapper className={className} id={id}>{children}</Wrapper>,
    content: ({children, className, id}) => <Content className={className} id={id}>{children}</Content>
}
export default Motioned;