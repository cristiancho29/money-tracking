import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ params }) => {
  try {
    const response = await supabase
      .from("movements")
      .select("*")
      .filter("id", "eq", params.id);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body: any = await request.json();
    const response: any = await supabase
      .from("movements")
      .update(request.body)
      .match({ id: body.id })
      .select("*");
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const response = await supabase
      .from("movements")
      .delete()
      .match({ id: params.id });
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
