import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
  // Catch-all route for 404s and unknown paths
  route("*", "routes/notfound.tsx"),
] satisfies RouteConfig;
