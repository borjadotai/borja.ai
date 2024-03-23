import Link from "next/link";
import ThemeImage from "./ThemeImage";

interface WorkCardProps {
  logo: string;
  link: string;
  name: string;
  industry: string;
  position: string;
  logoDark?: string;
}

export const WorkCard = ({
  logo,
  name,
  link,
  logoDark,
  position,
  industry,
}: WorkCardProps) => (
  <Link
    href={link}
    target="_blank"
    className="w-full flex space-x-4 rounded-3xl border border-white-terciary hover:bg-white-secondary p-6 dark:bg-black-secondary dark:hover:bg-black-primary dark:hover:ring-2 dark:hover:ring-black-terciary dark:border-0 shadow-sm"
  >
    <ThemeImage
      lightSrc={logo}
      darkSrc={logoDark ?? logo}
      width={48}
      height={48}
      alt={`${name}'s logo`}
      className="object-contain w-12 h-12"
    />
    <div className="w-full flex flex-col">
      <div className="w-full flex sm:flex-wrap-reverse">
        <p className="text-lg font-medium flex-1">{name}</p>
        <span className="bg-white-primary dark:bg-black-terciary rounded-lg text-xs px-2 py-1 h-min border dark:border-0">
          {industry}
        </span>
      </div>
      <p className="text-sm">{position}</p>
    </div>
  </Link>
);
