import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: JSX.Element;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  link,
  description,
  title,
}) => {
  return (
    <article className="flex flex-col w-full h-full bg-white lg:opacity-50 transition-all lg:hover:opacity-100 transform lg:hover:scale-105 cursor-pointer">
      <div className="flex items-center justify-center text-2xl md:text-3xl lg:text-4xl mb-4">
        {icon ? icon : ''}
      </div>
      <section className="px-8 flex flex-col items-center justify-center mb-8">
        <h3 className="font-sand font-bold text-xl lg:text-2xl mb-4">
          {title}
        </h3>
        <p className="text-center leading-7 text-stone-400">{description}</p>
      </section>
      <div className="w-full h-full flex flex-col justify-end">
        <Link href={link}>
          <a className="text-center text-slate-400 transition-all hover hover:text-slate-500 underline font-medium font-pop">
            More about {title}
          </a>
        </Link>
      </div>
    </article>
  );
};
export default ServiceCard;
