import Link from 'next/link';

interface WorkCardProps {
  href: string;
  client: string;
  type: string;
  color: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ client, type, color, href }) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={`capitalize flex flex-col space-y-1 p-4 bg-white/20 transition-all hover hover:bg-black/5 border-l-8 border-${color}/75 lg:hover:border-${color}`}
        >
          <span className="w-full flex justify-start space-x-2">
            <span>client</span>
            <strong>{client}</strong>
          </span>
          <span className="w-full flex justify-start space-x-2">
            <span>Type</span>
            <strong>{type}</strong>
          </span>
        </a>
      </Link>
    </li>
  );
};
export default WorkCard;
