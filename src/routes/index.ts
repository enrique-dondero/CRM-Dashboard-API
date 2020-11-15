import { Express } from "express-serve-static-core";
import apiRoutes from "./api";
import publicRoutes from "./public";

export default class Routes {
  public static configure (app: Express): void {
    app.use("/", publicRoutes);
    app.use("/api", apiRoutes);
  }
}
