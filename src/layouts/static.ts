interface RouteData {
  href: string;
  textContent?: string;
}

type RoutesDataType = RouteData[];

const Routes: RoutesDataType = [
  { href: '/', textContent: 'Home' },
  { href: '/team', textContent: 'Team Motioned' },
  { href: '/services', textContent: 'Services' },
  { href: '/works', textContent: 'Works' },
  { href: '/contact', textContent: 'Contact' },
];

export { Routes };
