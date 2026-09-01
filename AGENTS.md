# AI Agent Instructions Guide for function-declaration-argument-newline

This document is the **central entry point** for all AI agents (Copilot, Claude, Codex, etc.) working on `function-declaration-argument-newline`.

## Overview

`function-declaration-argument-newline` uses a hierarchical system of AI instructions:

- **`.agents/`**: common instructions, agnostic to all agents
- **Agent-specific adapters**: `.github/` (Copilot), `.claude/` (Claude), `.codex/` (Codex)

## Loading instructions

### Step 1: Identify the task type

Determine which category matches the user's request:

| Task type                           | Skill to load         |
| ----------------------------------- | --------------------- |
| Implement code, refactoring, bugfix | `code-implementation` |
| Write tests, improve coverage       | `test-writing`        |
| Write documentation, README, guides | `documentation`       |
| Create a commit, check conventions  | `commit-conventions`  |
| Review a PR or diff before merge    | `code-review`         |

### Step 2: Load the appropriate skill

1. Read `.agents/skills/<skill-name>/SKILL.md`
2. Follow the references to the associated files:
   - `.agents/instructions.md` (common coding rules)
   - `.agents/commit-message.md` (commit conventions)
   - `.agents/tasks.md` (expectations per task type)
   - the skill's own `tasks.md` (skill-specific tasks)

### Step 3: Apply adapters (if needed)

Check the adapter specific to your agent for extended capabilities:

- **Copilot**: `.github/copilot-instructions.md` and `.github/prompts/*.prompt.md`
- **Claude**: `.claude/commands/*.md`
- **Codex**: `.codex/skills/*.md` and `.codex/commands/*.md`

## Available commands

The following commands are exposed by agent adapters when present (`.codex/commands/`, `.claude/commands/`, `.github/prompts/`):

| Workflow           | Description                                             | Command                     |
| ------------------ | ------------------------------------------------------- | --------------------------- |
| `commit-staged.md` | Create a Conventional Commit with gitmoji               | `/commit-staged`            |
| `create-branch.md` | Create a branch from a GitHub issue                     | `/create-branch <issue-id>` |
| `create-issue.md`  | Create a GitHub issue from staged changes               | `/create-issue`             |
| `create-pr.md`     | Create a Pull Request to the repository's target branch | `/create-pr [base-branch]`  |

**Usage**: agent adapters' custom commands must stay minimal and point back to the common instructions in `.agents/*`.

## Skill priorities

Some skills take priority over others depending on context:

1. **commit-conventions**: absolute priority when authoring or formatting a commit, branch, or PR (message, title, target branch) — not when reviewing PR content, see `code-review`
2. **code-implementation**: priority for code implementation
3. **test-writing**: priority when writing tests
4. **documentation**: priority for documentation
5. **code-review**: priority when reviewing a PR or diff before merge

## Commit conventions

function-declaration-argument-newline uses **Conventional Commits** with **gitmoji**:

```text
<type>: <gitmoji> <description>

## Why the change was made:
- reason 1
- reason 2

## What was changed:
- change 1
- change 2
```

**Main types**:

- `feat`: new feature
- `fix`: bug fix
- `docs`: documentation
- `refactor`: refactoring with no behavior change
- `test`: adding or changing tests
- `chore`: maintenance, dependencies

See `.agents/commit-message.md` for the full reference.

## Project structure

function-declaration-argument-newline is an ESLint plugin.

## Help and reference

- **Instruction governance**: `.agents/README.md`
- **Coding instructions**: `.agents/instructions.md`
- **Commit conventions**: `.agents/commit-message.md`
- **Available skills**: `.agents/skills/*/SKILL.md`
- **Codex commands**: `.codex/commands/*.md`
- **Claude commands**: `.claude/commands/*.md`
- **Copilot prompts**: `.github/prompts/*.prompt.md`

## For new contributors

1. Read this file in full
2. Check `.agents/README.md` to understand governance
3. Load the appropriate skill for the task
4. Use the common workflows for Git/GitHub operations

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
