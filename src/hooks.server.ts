import { redirect } from "@sveltejs/kit";
import { getToken } from "$lib/server/auth";
import { requiresAuth } from "$lib/server/router";

export async function handle({ event, resolve }) {
  const { pathname } = event.url;

  if (requiresAuth(pathname)) {
    const token = getToken(event.cookies);

    if (!token) {
      throw redirect(303, "/sign-in");
    }

    // Optional (later):
    // validate token with API here
  }

  return resolve(event);
}
