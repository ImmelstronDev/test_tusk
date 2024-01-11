import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import SecondaryButton from "./secondaryButton";

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-around items-center py-10 bg-white text-black dark:bg-black dark:text-white ">
      <Image
        src="/desktop_logo.svg"
        width={64}
        height={64}
        alt="logo"
        priority={true}
        className=" w-16 h-16 max-sm:w-11 max-sm:h-11"
      ></Image>
      <nav className="flex gap-8 max-md:hidden">
        <a href="" className="font-medium">
          Use cases
        </a>
        <a href="" className="font-medium">
          Features
        </a>
        <a href="" className="font-medium">
          How to start
        </a>
      </nav>
      <div className="flex items-center gap-2">
        {mounted && resolvedTheme === "light" ? (
          <Image
            src="/sun_desktop.svg"
            width={32}
            height={32}
            alt="sun"
            className=" w-8 h-8 max-sm:w-6 max-sm:h-6 cursor-pointer"
            onClick={toggleTheme}
          ></Image>
        ) : (
          <Image
            src="/moon_desktop.svg"
            width={32}
            height={32}
            alt="moon"
            className=" w-8 h-8 max-sm:w-6 max-sm:h-6 cursor-pointer"
            onClick={toggleTheme}
          ></Image>
        )}

        <SecondaryButton label="Get started" />
      </div>
    </header>
  );
};

export default Header;
