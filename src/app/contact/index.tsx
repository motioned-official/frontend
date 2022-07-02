import View from '@/components/view';
import Image from 'next/image';
import MyLogo from 'public/motioned_square_logo.png';
const Hero: React.FC = () => {
  return (
    <section className="w-full relative max-w-6xl mx-auto p-8 py-28 lg:px-0 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center">
      <View id="contact-her" className="">
        <article className="w-full h-full flex flex-col justify-center items-start">
          <h2 className="font-bold font-pop text-2xl md:text-3xl lg:text-4xl mb-4">
            Contact Us.
          </h2>
          <p className="font-pop leading-7 md:text-lg lg:text-xl lg:leading-8 mb-8">
            Whether you have a simple question about our services or business
            inquiries, please contact us so that we can help you better.
          </p>
          <p className="text-stone-600/60 pb-4 border-b mb-2">
            <span>
              *Currently automatic form submission interface is under
              construction. Please contact via email or any listed socia media
              platform.
            </span>
          </p>
          <div className="mt-2 flex flex-col space-y-2 text-stone-600">
            <span className="font-sand flex flex-col">
              <span className="font-bold">Email</span>
              <a href="mailto:haneulchoi.business@gmail.com">
                haneulchoi.business@gmail.com
              </a>
            </span>
          </div>
          <div className="mt-2 flex flex-col space-y-2 text-stone-600">
            <span className="font-sand flex items-start space-x-2">
              <a
                className="font-bold transition-all hover hover:text-stone-500/50"
                href="https://linkedin.com/company/motioned-official"
              >
                Linkedin
              </a>
              <a
                className="font-bold transition-all hover hover:text-stone-500/50"
                href="https://instagram.com/motioned_official"
              >
                Instagram
              </a>
            </span>
          </div>
        </article>
      </View>
      <View id="contact-image" className="">
        <article className="w-full h-full flex flex-col justify-center items-start lg:items-center lg:py-8">
          <article className="w-full max-w-xs mx-auto relative">
            <Image
              src={MyLogo}
              alt="Motioned Gif"
              className="z-0 opacity-90"
              layout="responsive"
            />
          </article>
        </article>
      </View>
    </section>
  );
};

export default Hero;
