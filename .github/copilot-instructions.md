# Copilot Adapter

Copilot-specific extensions for the `function-declaration-argument-newline` project.

## Common rules

See [`AGENTS.md`](../AGENTS.md) for the central, agnostic guide.

The project's **Skills** apply automatically:

- `.agents/skills/code-implementation/` — implementation & refactoring
- `.agents/skills/test-writing/` — tests
- `.agents/skills/documentation/` — documentation
- `.agents/skills/commit-conventions/` — commits & PR authoring (absolute priority)
- `.agents/skills/code-review/` — reviewing a PR or diff before merge

## Custom commands

Common workflows live in `.agents/*` and the adapted commands in `.github/prompts/*`.

Copilot commands are exposed as prompt files in `.github/prompts/*.prompt.md`:

- `/commit-staged`
- `/create-branch`
- `/create-issue`
- `/create-pr`

## Agent-only (Copilot)

- Reason: GitHub Copilot exposes reusable workflows via prompt files.
- Impact: Copilot uses the common skills and the custom commands from `.github/prompts/*`.
- Fallback: see `.agents/*` and `AGENTS.md`

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Tool Versions

Run `vp toolchain` to show versions and relationships in the active Vite+
release. Add a tool name to select part of the graph. For example, run
`vp toolchain vite`. Use `--global` to ignore the local `vite-plus` package. Use
`vp why <package>` to show the package-manager dependency graph.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
