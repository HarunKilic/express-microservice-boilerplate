import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
// TODO: use new package
import { errorHandler, NotFoundError } from "@udtickets/common";

const app = express();

// For K8S
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    //secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
