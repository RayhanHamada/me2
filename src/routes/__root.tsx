import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { avatarURL } from "@/lib/constants";

import appCss from "../styles.css?url";

const RootDocument = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <HeadContent />
    </head>
    <body>
      <main className="relative flex w-full flex-col text-white md:px-15">
        {children}
      </main>
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
      {
        href: avatarURL,
        rel: "icon",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Rayhan Hamada",
      },
      {
        content: "Rayhan Hamada",
        name: "title",
      },
      {
        content:
          "Personal website of Muhammad Rayhan Hamada Budiman. Full-stack developer, open-source enthusiast, and lifelong learner.",
        name: "description",
      },
    ],
  }),

  shellComponent: RootDocument,
});
