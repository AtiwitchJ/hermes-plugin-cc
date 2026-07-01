# Hermes Agent plugin for Claude Code

> **Scaffold status:** the companion script and CLI wrapper are not implemented yet.
> See [`../kilo-plugin-cc`](../kilo-plugin-cc) for a complete reference implementation.

This plugin is for Claude Code users who want to delegate code reviews or tasks to the
Hermes Agent CLI ([hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)).

## What You Get (once implemented)

- `/hermes:review` for a normal read-only review
- `/hermes:adversarial-review` for a steerable challenge review
- `/hermes:rescue`, `/hermes:transfer`, `/hermes:status`, `/hermes:result`, and `/hermes:cancel`
- `/hermes:setup` to verify the CLI and authentication

## Requirements

- **`hermes` CLI** installed locally. Install with: `irm https://hermes-agent.nousresearch.com/install.ps1 | iex`
- Authentication: run `!hermes login`
- **Node.js 18.18 or later**

## Installing the scaffold

```bash
/plugin marketplace add <your-org>/hermes-plugin-cc
/plugin install hermes@agents-plugin-cc-hermes
```

The scaffold ships with stub commands that will fail with a "not implemented" error
until you wire up `plugins/hermes/scripts/lib/hermes.mjs` and
`plugins/hermes/scripts/hermes-companion.mjs`.

## Implementing the plugin

1. Open `plugins/hermes/scripts/lib/hermes.mjs` and replace the stub functions with real
   implementations that:
   - detect `hermes` availability (`binaryAvailable` is already imported)
   - probe authentication (`getHermesAuthStatus`)
   - invoke the CLI in the foreground and capture its output (`runHermes`)
   - discover a resumable session if available (`findLatestResumableSession`)
2. Open `plugins/hermes/scripts/hermes-companion.mjs` and copy the body of
   `../kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs`, renaming the imports from
   `./lib/kilo.mjs` to `./lib/hermes.mjs` and the `runKilo` calls to your new wrapper.
3. Add tests under `tests/` that cover argument parsing, state, and the new wrapper.

## Reference

See `../kilo-plugin-cc/` for a complete working example.

## License

Apache-2.0