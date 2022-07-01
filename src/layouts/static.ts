interface RouteData {
  href: string;
  textContent?: string;
}

type RoutesDataType = RouteData[];

const Routes: RoutesDataType = [
  { href: '/', textContent: 'Home' },
  { href: '/services', textContent: 'Services' },
  { href: '/works', textContent: 'Works' },
  { href: '/contact', textContent: 'Contact' },
];

export { Routes };
