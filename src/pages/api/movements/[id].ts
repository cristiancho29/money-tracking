import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  try {
    return new Response(JSON.stringify({ id: params.id }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    return new Response(JSON.stringify({ id: request.body }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    return new Response(JSON.stringify({ id: params.id }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
