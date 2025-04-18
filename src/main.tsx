import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./components/templates/HomePage";
import { WorkPage } from "./components/templates/WorkPage";
import Lenis from "lenis";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/work/:work",
		element: <WorkPage />,
	},
]);

export const lenis = new Lenis({
	autoRaf: true,
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
