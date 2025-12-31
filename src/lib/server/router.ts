/**
 * Any route that matches these prefixes requires auth
 */
export const protectedRoutePrefixes = [
  "/admin"
];

/**
 * Decide if a path needs authentication
 */
export function requiresAuth(pathname: string) {
  return protectedRoutePrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );
}
