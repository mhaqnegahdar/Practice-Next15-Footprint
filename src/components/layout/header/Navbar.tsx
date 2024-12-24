import { auth, signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn, LogOutIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = async () => {
  const session = await auth();

  return (
    <ul className="flex items-center gap-2 lg:gap-4">
      <ThemeToggle />
      {!session?.user ? (
        <>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button type="submit" title="Login">
              <LogIn />
              Login
            </Button>
          </form>
        </>
      ) : (
        <>
          <Link
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "px-2",
            )}
            href={"/create"}
          >
            <PlusCircle className="text-green-500" />
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant={"outline"}
              size={"icon"}
              type="submit"
              className={"px-2"}
            >
              <LogOutIcon className="text-red-500" />
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
