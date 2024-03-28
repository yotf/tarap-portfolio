import Image from "next/image";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="flex h-full  flex-col px-4 sm:px-8 md:flex-row  md:gap-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE */}
        <div className=" relative h-1/2 md:h-full md:w-1/2">
          <Image
            src="/landing.png"
            alt="landing"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 md:h-full md:w-1/2">
          {/* HEADING */}
          <h2 className="text-4xl font-bold md:text-4xl">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          {/* DESCRIPTION */}
          <p className="md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            cumque nihil ea at, vero eaque quaerat autem odit? Repellat
            cupiditate fugiat assumenda cum magnam labore, ad consectetur fugit
            autem ab.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="rounded-lg  bg-slate-800 p-2  text-white ring-1 ring-slate-800">
              View My Work
            </button>
            <button className="rounded-lg  p-2  text-white ring-1 ring-slate-800">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">First Steps →</h3>
          <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how
            to deploy it.
          </div>
        </Link>
      </div>
      <p className="text-2xl text-white">
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </p>
    </div> */}
    </>
  );
}
