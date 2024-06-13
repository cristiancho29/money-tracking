import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { data, error } = await supabase
      .from("movements")
      .select()
      .filter("id", "eq", params.id);
    if (error) throw error;
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body: MovementI = await request.json();
    const { data, error }: any = await supabase
      .from("movements")
      .update(body)
      .match({ id: body.id })
      .select();
    if (error) throw error;
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { data, error } = await supabase
      .from("movements")
      .delete()
      .match({ id: params.id })
      .select();
    if (error) throw error;
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
