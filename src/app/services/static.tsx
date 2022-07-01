import {
  SiMaterialdesignicons,
  SiMarketo,
  SiTheconversation,
} from 'react-icons/si';
import { FaLaptopCode, FaSearchLocation } from 'react-icons/fa';
import { VscDebugStepOver } from 'react-icons/vsc';
interface ServiceData {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}
type ServicesDataType = ServiceData[];

const Services: ServicesDataType = [
  {
    title: 'Design',
    description:
      'From minimalistic to complex user interface, we can design your idea into reality.',
    link: '/services/1',
    icon: <SiMaterialdesignicons />,
  },
  {
    title: 'Development',
    description:
      'From scratch to 100% hand-produced code to implement front-end application you and your business desired.',
    link: '/services/2',
    icon: <FaLaptopCode />,
  },
  {
    title: 'SEO',
    description:
      'Our experts follow minimun SEO best practices as well as integrating additiona SEO practices upon request.',
    link: '/services/3',
    icon: <FaSearchLocation />,
  },
  {
    title: 'Marketing',
    description:
      'We have a great connection with experts in the fields like photography and social media. We can provide clinets connection with them.',
    link: '/services/4',
    icon: <SiMarketo />,
  },
  {
    title: 'Maintenance',
    description:
      'We keep connected with our clients to provide maintenance/bug-fixing services as soon as possible when requested.',
    link: '/services/5',
    icon: <VscDebugStepOver />,
  },
  {
    title: 'Web Consultation',
    description:
      'Our future clients may want to deeply understand the mechanisms of web presence, We provide consultation in it at no cost.',
    link: '/services/6',
    icon: <SiTheconversation />,
  },
];
export { Services };
