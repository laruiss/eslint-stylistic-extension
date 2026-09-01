---
name: code-review
description: 'Review a pull request or diff before merging for this ESLint plugin. USE FOR: reviewing changes to rules, the plugin export, or tooling config before merge; verifying autofix safety and public API stability. DO NOT USE FOR: implementing changes (separate skill); writing tests (separate skill); documentation-only edits (separate skill).'
---

# Code Review

## Procedure

1. Read `../../instructions.md`, then `tasks.md`.
2. Diff the branch against its base (`git diff <base>...HEAD`, or the PR's changed files) — review only what changed, not the whole codebase.
3. Run `pnpm build`, `pnpm lint`, and `vp check`. The review isn't complete until these pass, or their failures are reported.
4. Check, in priority order:
   - autofix robustness and determinism (no fix that breaks code, loops, or unsafely moves a comment)
   - ESLint rule metadata (`type`, `docs`, `schema`, `messages`) matches the implementation and the options actually in use
   - README and configuration examples reflect the rule's real behavior
   - public surface stability: exports, rule names, and options stay backward compatible unless the change is explicitly a breaking one
   - general readability, typing, and compliance with the ESLint rule API
5. Report findings as concrete, prioritized recommendations, referencing file and line.

## Associated documentation

- [`../../instructions.md`](../../instructions.md) — common coding rules
- [`tasks.md`](tasks.md) — common review tasks
