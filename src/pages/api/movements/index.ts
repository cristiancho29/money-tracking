import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify([]), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    return new Response(JSON.stringify({ id: request.body }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
