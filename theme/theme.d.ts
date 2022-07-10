interface ClientThemeContextInterface {
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}

type ClientThemeContext = React.Context<ClientThemeContextInterface>;
