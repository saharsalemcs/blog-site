// @ts-check
import { module } from "@prisma/composer";
import blogSiteService from "./service.mjs";

export default module("blog-site", ({ provision }) => {
  provision(blogSiteService, { id: "blogsite" });
});
