import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async () => {
  try {
    const response = await supabase.from("movements").select("*");
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  const response = await supabase.from("movements").insert(request.body);
  try {
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
