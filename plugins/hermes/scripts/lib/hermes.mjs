import { binaryAvailable } from "./process.mjs";
/**
 * hermes wrapper - stub.
 * Copy ../kilo-plugin-cc/plugins/kilo/scripts/lib/kilo.mjs and adapt:
 *   - replace kilo binary with $binary
 *   - replace --format json with Hermes Agent's equivalent output flag
 *   - replace kilo profile auth probe with $binary's equivalent
 *   - replace kilo session list resume lookup with $binary's equivalent
 */
export function getHermesAvailability(cwd) { return binaryAvailable("hermes", ["--version"], { cwd }); }
export async function getHermesAuthStatus(cwd) {
  return { available: false, loggedIn: false, detail: "hermes-companion is a stub.", source: "stub" };
}
export async function runHermes() {
  throw new Error("hermes-companion is a stub. Implement scripts/lib/hermes.mjs.");
}
export async function findLatestResumableSession(cwd) { return null; }