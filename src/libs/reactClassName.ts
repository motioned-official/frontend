type ReactClassNameAction = (...args: string[]) => string;
const reactClassName: ReactClassNameAction = (...args) =>
  args.filter(Boolean).join(' ');
export default reactClassName;
