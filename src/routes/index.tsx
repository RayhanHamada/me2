import { createFileRoute } from "@tanstack/react-router";

import { avatarURL, CVURL, cvEmbedURL, links } from "@/lib/constants";

const App = () => (
  <div className="flex w-full">
    <div className="flex w-full flex-3 flex-col items-center space-y-4 p-10 lg:pl-4">
      <img
        alt="Foto Profil"
        className="w-30 rounded-full hover:animate-spin hover:duration-1000 hover:ease-in-out md:w-50"
        height="200"
        src={avatarURL}
        width="200"
      />
      <p className="text-center font-bold text-white md:text-2xl">
        Muhammad Rayhan Hamada Budiman
      </p>
      <p className="text-xs md:text-base">
        Student - Software Engineer - Programmer
      </p>
      <div className="flex flex-row space-x-4">
        {links.map((lo) => (
          <a href={lo.link} key={lo.link} rel="noreferrer" target="_blank">
            <img
              alt={lo.logo}
              className="size-6.25 md:size-11.25"
              height="25"
              src={lo.logo}
              width="25"
            />
          </a>
        ))}
      </div>
      <a
        className="block animate-bounce font-bold underline-offset-4 hover:underline md:hidden"
        href="/cv"
        rel="noreferrer"
        target="_blank"
      >
        My CV
      </a>
      <a
        className="hidden animate-bounce font-bold underline-offset-4 hover:underline md:block"
        href={CVURL}
        rel="noreferrer"
        target="_blank"
      >
        My CV
      </a>
    </div>
    <div className="hidden h-screen w-full flex-2 flex-col bg-white pb-10 md:flex">
      <iframe
        className="flex h-full w-full"
        height="120"
        loading="lazy"
        scrolling="no"
        src={cvEmbedURL}
        title="My CV"
        width="98"
      />
    </div>
  </div>
);

export const Route = createFileRoute("/")({
  component: App,
});
