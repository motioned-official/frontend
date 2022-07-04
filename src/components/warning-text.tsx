import View from './view';

interface WarningTextProps {
  id: string;
  color: string;
  textContent: string;
  link: {
    to?: string;
    textContent: string;
    color: string;
  };
}

const WarningText: React.FC<WarningTextProps> = ({
  id,
  color,
  textContent,
  link,
}) => {
  return (
    <View id={id} className="">
      <p className={`text-${color}/60 pt-2 border-t`}>
        <span>
          *{textContent}{' '}
          <a
            className={`text-${link.color} transition-all hover hover:text-${link.color}/50`}
            href={link.to ? link.to : ''}
          >
            {link.textContent}
          </a>
        </span>
      </p>
    </View>
  );
};
export default WarningText;
