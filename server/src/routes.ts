import { FastifyInstance } from "fastify";

import { prisma } from "./lib/prisma";

export async function appRouters(app:FastifyInstance) {
    app.get("/", async () => {
        const habits = prisma.habit.findMany()
        
        return habits
     });
}

