import Image from "next/image";
import { WorkCard } from "@/components/WorkCard";
import { SocialCard } from "@/components/SocialCard";
import { MAIN_COPY, SOCIAL_CARDS, WORK_CARDS } from "./config";

const SocialLinks = () => (
  <div className="flex gap-4">
    {SOCIAL_CARDS.map((sc) => (
      <SocialCard
        key={sc.name}
        name={sc.name}
        link={sc.link}
        logo={sc.logo}
        logoDark={sc.logoDark}
      />
    ))}
  </div>
);

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-center px-6 py-8 gap-4">
      <div className="w-full h-fit sm:w-1/2 lg:w-1/3 sm:flex sm:flex-col sm:gap-4">
        <div className="w-full h-fit rounded-3xl border border-white-terciary p-6 dark:bg-black-secondary dark:border-0 shadow-sm">
          <div className="flex space-x-4">
            <Image
              src="/me.jpeg"
              width={48}
              height={48}
              alt="picture of Borja Leiva's face"
              className="rounded-2xl"
            />
            <div className="flex flex-1 flex-col">
              <p className="flex-1 text-lg">Borja Leiva</p>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <p className="text-sm text-black-foreground">
                  Unavailable for hire
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Image
                src="/countries/es.png"
                width={24}
                height={24}
                alt="Spain's flag"
                className="object-contain"
              />
              <Image
                src="/countries/uk.png"
                width={24}
                height={24}
                alt="UK's flag"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xl font-normal leading-relaxed pt-6">
            {MAIN_COPY}
          </p>
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/4 space-y-4">
        {WORK_CARDS.map((wc) => (
          <WorkCard
            key={wc.name}
            name={wc.name}
            logo={wc.logo}
            link={wc.link}
            industry={wc.industry}
            logoDark={wc.logoDark}
            position={wc.position}
          />
        ))}
      </div>
      {/* <div className="block sm:hidden">
        <SocialLinks />
      </div> */}
    </div>
  );
}
