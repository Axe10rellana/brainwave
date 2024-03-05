//context hook
import { useBrainwave } from "../context/BrainwaveContext";

//constants
import { socials } from "../constants";

//components
import { Section } from ".";

const Footer = () => {
  //variables
  const { getCurrentYear } = useBrainwave();

  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center items-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          © {getCurrentYear} All rights reserved.
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img
                className="pointer-events-none select-none"
                src={item.iconUrl}
                width={16}
                height={16}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
