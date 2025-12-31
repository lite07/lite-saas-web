import { logout } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";

export async function POST({ fetch, cookies }) {
  await logout({ fetch, cookies });
  throw redirect(303, "/sign-in");
}
