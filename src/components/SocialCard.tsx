import Link from "next/link";
import ThemeImage from "./ThemeImage";

interface SocialCard {
  name: string;
  link: string;
  logo: string;
  logoDark?: string;
}

export const SocialCard = ({ name, link, logo, logoDark }: SocialCard) => (
  <Link
    href={link}
    target="_blank"
    className="w-1/4 flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-white-terciary hover:bg-white-secondary py-6 dark:bg-black-secondary dark:hover:bg-black-primary dark:hover:ring-2 dark:hover:ring-black-terciary dark:border-0 shadow-sm"
  >
    <ThemeImage
      width={32}
      height={32}
      lightSrc={logo}
      alt={`${name} logo`}
      darkSrc={logoDark ?? logo}
    />
  </Link>
);
