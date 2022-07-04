import View from '@/components/view';

const HeroText: React.FC = () => {
  return (
    <View id="contact-hero" className="">
      <article className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="font-bold font-pop text-2xl md:text-3xl lg:text-4xl mb-4">
          Contact Us.
        </h2>
        <p className="font-pop leading-7 md:text-lg lg:text-xl lg:leading-8 mb-8">
          Whether you have a simple question about our services or business
          inquiries, please contact us so that we can help you better.
        </p>
        <p className="text-stone-300/75 pb-4 border-b mb-2">
          <span>
            *Currently automatic form submission interface is under
            construction. Please contact via email or any listed socia media
            platform.
          </span>
        </p>
        <div className="mt-2 flex flex-col space-y-2 text-stone-100">
          <span className="font-sand flex flex-col">
            <span className="font-bold">Email</span>
            <a href="mailto:haneulchoi.business@gmail.com">
              haneulchoi.business@gmail.com
            </a>
          </span>
        </div>
        <div className="mt-2 flex flex-col space-y-2 text-stone-100">
          <span className="font-sand flex items-start space-x-2">
            <a
              className="font-bold transition-all hover hover:text-stone-300/50"
              href="https://linkedin.com/company/motioned-official"
            >
              Linkedin
            </a>
            <a
              className="font-bold transition-all hover hover:text-stone-300/50"
              href="https://instagram.com/motioned_official"
            >
              Instagram
            </a>
          </span>
        </div>
      </article>
    </View>
  );
};

export default HeroText;
