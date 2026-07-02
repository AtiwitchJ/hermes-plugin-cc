# Hermes Agent plugin for Claude Code

This plugin is for Claude Code users who want to delegate code reviews or tasks to the
Hermes Agent CLI ([hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/)).

## What You Get

- `/hermes:review` for a normal read-only review
- `/hermes:adversarial-review` for a steerable challenge review
- `/hermes:rescue`, `/hermes:transfer`, `/hermes:status`, `/hermes:result`, and `/hermes:cancel`
- `/hermes:setup` to verify the CLI and authentication

## Requirements

- **`hermes` CLI** installed locally. Install with: `irm https://hermes-agent.nousresearch.com/install.ps1 | iex`
- Authentication: run `!hermes login`
- **Node.js 18.18 or later**

## Install in Claude Code

```bash
/plugin marketplace add <your-org>/hermes-plugin-cc
/plugin install hermes@agents-plugin-cc-hermes
```

## Install in Codex

```bash
codex plugin marketplace add ./.agents/plugins/marketplace.json
codex plugin add hermes@agents-plugin-cc-hermes
```

Start a new Codex thread after installing or updating the plugin. Codex-facing skills live
under `plugins/hermes/skills/` and call `plugins/hermes/scripts/hermes-companion.mjs`.

## Runtime

The companion invokes the local Hermes CLI with `hermes -z <prompt>`. `/hermes:setup`
or `node plugins/hermes/scripts/hermes-companion.mjs setup --json` reports missing
CLI/authentication steps without returning a placeholder error.

## Reference

See `../kilo-plugin-cc/` for the reference implementation this runtime follows.

## License

Apache-2.0
