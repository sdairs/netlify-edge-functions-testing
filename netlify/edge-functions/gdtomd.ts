import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  request.json().then(d => {
    console.log(d);
    return new Response(d);
  });
};
