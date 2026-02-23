import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/landing.tsx"),
    route("/about","pages/about.tsx"),
    route("/services","pages/services.tsx"),
    route("/testimonials","pages/testimonials.tsx"),
    route("/contacts","pages/contacts.tsx"),
    route("/login_signup","pages/login_signup.tsx")
] satisfies RouteConfig;
