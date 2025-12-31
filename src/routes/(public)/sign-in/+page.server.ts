import { login } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, fetch, cookies }) => {
    console.log("[sign-in] action called");

    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      return fail(400, { invalid: true });
    }

    try {
      await login({ fetch, cookies, email, password });
    } catch (e) {
      console.error("[sign-in] login failed", e);
      return fail(401, { invalid: true });
    }

    throw redirect(303, "/admin/users");
  }
};
