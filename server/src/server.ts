import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get("/hello", async () => {
   const habits = prisma.habit.findMany()
   
   return habits
});

app.listen({
    port: 3000
})





  