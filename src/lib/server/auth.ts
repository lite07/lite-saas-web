import { redirect, error } from "@sveltejs/kit";
import { API_BASE_URL } from "$env/static/private";


const TOKEN_COOKIE = "auth_token";

/**
 * Call login API and persist token
 */
export async function login({ fetch, cookies, email, password }) {
  console.log("[auth] login() called");
  console.log("[auth] email:", email);

  const res = await fetch(`${API_BASE_URL}/api/sessions/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  console.log("[auth] API response status:", res.status);

  if (!res.ok) {
    throw error(401, "Invalid credentials");
  }

  const body = await res.json();
  const token = body?.data?.token;

  console.log("[auth] token:", token)
  
  if (!token) return;

  cookies.set(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

/**
 * Invalidate token on backend and clear cookie
 */
export async function logout({ fetch, cookies }) {
  const token = cookies.get(TOKEN_COOKIE);

  if (token) {
    try {
      await fetch(`${API_BASE_URL}/api/sessions/invalidate`, {
        method: "POST",
        headers: {
          Authorization: `${token}`
        }
      });
    } catch (err) {
      // Do NOT block logout on backend failure
      console.error("[auth] failed to invalidate token", err);
    }
  }

  cookies.delete(TOKEN_COOKIE, { path: "/" });
}

/**
 * Read token (server-only)
 */
export function getToken(cookies) {
  return cookies.get(TOKEN_COOKIE);
}
