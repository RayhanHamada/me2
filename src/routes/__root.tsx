import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { avatarURL } from "@/lib/constants";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: async () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Rayhan Hamada",
			},
			{
				name: "title",
				content: "Rayhan Hamada",
			},
			{
				name: "description",
				content:
					"Personal website of Muhammad Rayhan Hamada Budiman. Full-stack developer, open-source enthusiast, and lifelong learner.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: avatarURL,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
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
}
