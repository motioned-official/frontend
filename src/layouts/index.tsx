import Header from '@/layouts/header';

interface LayoutProps {
  children: JSX.Element;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layout" className="w-full relative ">
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
