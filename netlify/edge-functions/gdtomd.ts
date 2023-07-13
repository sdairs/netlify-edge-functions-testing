import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const body = await request.text();
  console.log(body);
  const response = await context.next();
  return new Response(body, response);
};
