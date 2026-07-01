#!/usr/bin/env node
/**
 * hermes-companion - dispatcher stub for the Hermes plugin.
 *
 * Implementation plan (copy from kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs):
 *   - swap `import "./lib/kilo.mjs"` for `import "./lib/hermes.mjs"`
 *   - swap `runKilo`/`getKiloAvailability`/`getKiloAuthStatus` calls for their
 *     `runHermes`/`getHermesAvailability`/`getHermesAuthStatus` equivalents
 *   - the CLI binary is `hermes`, not `kilo`
 */
import process from "node:process";

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node scripts/hermes-companion.mjs setup [--json]",
      "  node scripts/hermes-companion.mjs review [--wait|--background] [--base <ref>]",
      "  node scripts/hermes-companion.mjs adversarial-review [--wait|--background] [--base <ref>] [focus text]",
      "  node scripts/hermes-companion.mjs task [--background] [--write] [--resume|--fresh] [prompt]",
      "  node scripts/hermes-companion.mjs status [job-id] [--json]",
      "  node scripts/hermes-companion.mjs result [job-id] [--json]",
      "  node scripts/hermes-companion.mjs cancel [job-id] [--json]"
    ].join("\n")
  );
}

async function main() {
  const [subcommand] = process.argv.slice(2);
  if (!subcommand || subcommand === "help" || subcommand === "--help") {
    printUsage();
    return;
  }
  process.stderr.write(
    "`hermes-companion` is a stub. See ../kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs for a complete reference implementation. The CLI binary is `hermes`.\n"
  );
  process.exitCode = 1;
}

main();
