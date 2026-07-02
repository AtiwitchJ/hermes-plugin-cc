---
name: hermes-cli-runtime
description: Operational guidance for calling the Hermes Agent CLI from this plugin's companion script.
---

# Hermes Agent CLI runtime

The Hermes plugin wraps the local `hermes` CLI. The companion script is implemented and
uses the same command surface in Claude Code and Codex.

## Binary

- Command name: `hermes`
- Authentication: run the provider login required by your Hermes install

## Invocation

- Availability probe: `hermes --version`
- Task/review execution: `hermes -z <prompt>`
- Setup output: `node scripts/hermes-companion.mjs setup --json`

If `hermes` is missing or unauthenticated, setup reports actionable next steps. Runtime
commands should not describe the companion as a placeholder.
