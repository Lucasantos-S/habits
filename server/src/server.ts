import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRouters } from "./routes";

const app = Fastify();


app.register(cors)
app.register(appRouters)

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running");
  });







  