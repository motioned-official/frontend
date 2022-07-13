import { reactClassNames } from '@motioned-official/react-functions';
import { useTheme } from '../theme';
import Footer from './footer';
import Header from './header';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      id="layout"
      className={reactClassNames(
        'relative',
        theme === 'light'
          ? 'bg-light-primary text-light-text'
          : 'bg-dark-primary text-dark-text'
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
