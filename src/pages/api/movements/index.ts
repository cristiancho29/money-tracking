import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async () => {
  try {
    const { data, error } = await supabase.from("movements").select();
    console.log({ data, error });
    // if (error) throw error;
    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { error },
      {
        status: 500,
      },
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  const { data, error } = await supabase
    .from("movements")
    .insert(await request.json())
    .select();
  if (error) throw error;
  try {
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
};
