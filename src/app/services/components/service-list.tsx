import View from '@/components/view';
import { Services } from '../static';
import ServiceCard from './service-card';

const ServiceList: React.FC = () => {
  return (
    <View id="services-cards" className="w-full">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 lg:px-0">
        {Services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </article>
    </View>
  );
};
export default ServiceList;
