---
description: Run a Hermes Agent review that challenges the implementation approach and design choices
argument-hint: '[--wait|--background] [--base <ref>] [--scope auto|working-tree|branch] [focus ...]'
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash(node:*), Bash(git:*), AskUserQuestion
---

Run an adversarial Hermes review through the shared plugin runtime.

Raw slash-command arguments:
`$ARGUMENTS`

Foreground flow:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/hermes-companion.mjs" adversarial-review "$ARGUMENTS"
```

Background flow:

```typescript
Bash({
  command: `node "${CLAUDE_PLUGIN_ROOT}/scripts/hermes-companion.mjs" adversarial-review "$ARGUMENTS"`,
  description: "Hermes adversarial review",
  run_in_background: true
})
```

- After launching, tell the user: "Hermes adversarial review started in the background. Check `/hermes:status` for progress."