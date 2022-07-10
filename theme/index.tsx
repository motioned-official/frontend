import { createContext, useContext, useEffect, useState } from 'react';

const ClientTheme: ClientThemeContext = createContext({} as any);

const ClientThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  useEffect(() => {
    console.log(`App is running with theme:${theme}!`);
  }, [theme]);
  return (
    <ClientTheme.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ClientTheme.Provider>
  );
};

const useTheme = () => {
  const { theme, setTheme } = useContext(ClientTheme);

  return {
    theme,
    setTheme,
  };
};

export { ClientThemeProvider, useTheme };
