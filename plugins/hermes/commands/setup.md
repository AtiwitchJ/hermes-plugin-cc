---
description: Check whether the local Hermes Agent CLI is ready and authenticated
argument-hint: '[]'
disable-model-invocation: true
allowed-tools: Bash(node:*), Bash(npm:*), AskUserQuestion
---

Run:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/hermes-companion.mjs" setup --json $ARGUMENTS
```

If the result says Hermes is unavailable:
- Use `AskUserQuestion` exactly once to ask whether Claude should install Hermes now.
- Put the install option first and suffix it with `(Recommended)`.
- Use these two options:
  - `Install Hermes (Recommended)`
  - `Skip for now`
- If the user chooses install, run:

```bash
irm https://hermes-agent.nousresearch.com/install.ps1 | iex
```

- Then rerun:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/hermes-companion.mjs" setup --json $ARGUMENTS
```

If Hermes is already installed:
- Do not ask about installation.

Output rules:
- Present the final setup output to the user.
- If installation was skipped, present the original setup output.
- If Hermes is installed but not authenticated, preserve the guidance to run `!hermes login`.