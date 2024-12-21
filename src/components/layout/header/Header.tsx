import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="absolute top-0 z-10 w-full">
      <Container>
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={"/"} className="realative max-w-44 lg:max-w-[20%]">
            <Image
              alt="Footprint"
              src="/img/logo.png"
              className="w-full object-contain"
              width={500}
              height={25}
            />
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
