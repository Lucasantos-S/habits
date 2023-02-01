import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRouters } from "./routes";

const app = Fastify();


app.register(cors)
app.register(appRouters)

const port = process.env.PORT || 3333

app.listen({
    port: 3333
}).then(() => console.log('server rodando com sucesso!!')
)







  