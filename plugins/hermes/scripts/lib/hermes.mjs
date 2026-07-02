import { binaryAvailable, formatCommandFailure, runCommand } from "./process.mjs";

const BINARY = "hermes";

export function getHermesAvailability(cwd) {
  return binaryAvailable(BINARY, ["--version"], { cwd });
}

export async function getHermesAuthStatus(cwd) {
  const availability = getHermesAvailability(cwd);
  if (!availability.available) {
    return {
      available: false,
      loggedIn: false,
      detail: `Hermes CLI is missing: ${availability.detail}`,
      source: "binary"
    };
  }
  return {
    available: true,
    loggedIn: true,
    detail: "Hermes CLI is available; command execution will surface any provider authentication errors.",
    source: "binary"
  };
}

export function ensureHermesAvailable(cwd) {
  const availability = getHermesAvailability(cwd);
  if (!availability.available) {
    throw new Error(
      `Hermes CLI is not installed or is missing required runtime support (${availability.detail}). Install Hermes and make sure the \`hermes\` binary is on PATH, then rerun /hermes:setup.`
    );
  }
}

export async function runHermes(cwd, options = {}) {
  ensureHermesAvailable(cwd);
  const prompt = String(options.prompt ?? options.defaultPrompt ?? "").trim();
  const result = runCommand(BINARY, ["-z", prompt], { cwd });
  const failure = result.error
    ? result.error.message
    : result.status === 0
      ? ""
      : formatCommandFailure(result);
  return {
    status: result.error ? 1 : result.status,
    text: result.stdout.trim(),
    stderr: result.stderr.trim(),
    error: failure,
    sessionId: null
  };
}

export async function findLatestResumableSession() {
  return null;
}

export const AGENT_RUNTIME = {
  agent: "hermes",
  displayName: "Hermes",
  cliLabel: "Hermes CLI",
  installHint: "Install Hermes and make sure the `hermes` binary is on PATH.",
  authHint: "Authenticate Hermes with your configured provider, then rerun /hermes:setup.",
  getAvailability: getHermesAvailability,
  getAuthStatus: getHermesAuthStatus,
  ensureAvailable: ensureHermesAvailable,
  run: runHermes
};
