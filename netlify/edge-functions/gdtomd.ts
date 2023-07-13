import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const body = await request.text();
  const response = await context.next();
  return new Response(body, response);
};
