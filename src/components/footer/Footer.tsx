import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className={"sticky bottom-5 w-full cursor-pointer"}>
      <Link href={"#mainHero"}>
        <div>
          <div className={"relative w-10 h-10 mx-auto"}>
            <Image
              className={
                "absolute rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
              }
              fill
              src={"/hela.jpg"}
              alt="Footer-pic"
            />
          </div>
        </div>
      </Link>
    </footer>
  );
};
