import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/vscLayout.tsx", [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("about", "routes/about.tsx"),
    route("resume", "routes/resume.tsx"),
  ]),
] satisfies RouteConfig;
