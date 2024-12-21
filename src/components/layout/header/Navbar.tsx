import { auth, signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOutIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <ul className="flex items-center gap-2 lg:gap-4">
      {!session?.user ? (
        <>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit" title="Login">
              <Image
                width={16}
                height={16}
                alt="Github"
                src={"/img/github.png"}
              />
              Login
            </Button>
          </form>
        </>
      ) : (
        <>
          <Link
            className={cn(buttonVariants({ variant: "ghost" }), "px-2")}
            href={"/create"}
          >
            <PlusCircle className="block h-full md:hidden" />
            <span className="hidden md:block">Create</span>
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button variant={"ghost"} type="submit" className={"px-2"}>
              <span className="hidden md:block">Log Out</span>
              <LogOutIcon className="block md:hidden" />
            </Button>
          </form>
          <Link href={"/profile"}>
            <figure className="relative size-8 md:ml-2 lg:size-12">
              <Image
                src={`${session.user.image}`}
                alt="User Avatar"
                fill
                className="w-full rounded-full"
              />
            </figure>
          </Link>
        </>
      )}
    </ul>
  );
};

export default Navbar;
