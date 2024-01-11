import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import DefaultButton from "./defaultButton";
import Image from "next/image";

const FirstSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <section className="h-full bg-white dark:bg-black  flex justify-around max-xl:flex-wrap">
      <div className="ml-3 ">
        <div className="flex flex-col gap-8">
          <div className=" flex flex-col max-md:items-center">
            <div className="text-2xl font-semibold tracking-tighter dark:text-blue max-md:text-[46px] max-md:tracking-tight">
              Crypto payments for
            </div>
            <div className="text-2xl font-semibold tracking-tighter text-blue max-md:text-[46px] max-md:tracking-tight">
              telegram bots
            </div>
          </div>
          <div className=" max-md:flex max-md:flex-col max-md:items-center">
            <div>Seamlessly accept crypto payments</div>
            <div>in your Telegram bots and services.</div>
          </div>
          <div className=" max-md:flex max-md:flex-col max-md:items-center">
            <DefaultButton label="Get started" />
          </div>
        </div>
        <div className="mt-14 max-md:flex max-md:flex-col max-md:items-center">
          <div className="flex gap-0 ">
            <Image
              src="1d.svg"
              alt="img"
              width={88}
              height={88}
              className="border-white border-4 rounded-full z-0 -mx-3 dark:border-black max-md:w-[59px] max-md:h-[59px]"
            ></Image>
            <Image
              src="2d.svg"
              alt="img"
              width={88}
              height={88}
              className="border-white border-4 rounded-full z-10 -mx-3 dark:border-black max-md:w-[59px] max-md:h-[59px]"
            ></Image>
            <Image
              src="3d.svg"
              alt="img"
              width={88}
              height={88}
              className="border-white border-4 rounded-full z-20 -mx-3 dark:border-black max-md:w-[59px] max-md:h-[59px]"
            ></Image>
            <Image
              src="4d.svg"
              alt="img"
              width={88}
              height={88}
              className="border-white border-4 rounded-full z-30 -mx-3 dark:border-black max-md:w-[59px] max-md:h-[59px]"
            ></Image>
            <Image
              src="5d.svg"
              alt="img"
              width={88}
              height={88}
              className="border-white border-4 rounded-full z-40 -mx-3 dark:border-black max-md:w-[59px] max-md:h-[59px]"
            ></Image>
          </div>
          <div>Popular bots use Crypto Pay</div>
        </div>
      </div>
      <div>
        {mounted && resolvedTheme === "light" ? (
          <Image
            src="/img_phone_mobile_light.png"
            alt="phone"
            width={488}
            height={700}
            className="max-md:w-[375px] max-md:h-[640px]"
          ></Image>
        ) : (
          <Image
            src="/img_phone_mobile_dark.png"
            alt="phone"
            width={488}
            height={700}
            className="max-md:w-[375px] max-md:h-[640px]"
          ></Image>
        )}
      </div>
    </section>
  );
};

export default FirstSection;
