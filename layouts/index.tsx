import Header from "./header";

const Layout : React.FC<LayoutProps> = ({children}) => {
    return (
        <div id="layout" className="relative w-full">
            <Header />
            <main>{children}</main>
        </div>
    )
};
export default Layout;