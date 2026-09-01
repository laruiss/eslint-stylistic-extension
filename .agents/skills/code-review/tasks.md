# Tasks - Code Review

## 🔍 Review a pull request or diff

> Review the diff between this branch and its base branch (or the changed files listed in the PR).
> Run `pnpm build`, `pnpm lint`, and `vp check` first; report any failures before going further.
> Focus only on what changed — don't re-review untouched code.

## 🛠️ Verify autofix safety

> For any changed or new `fixable` rule, trace the autofix through a few edge cases (adjacent comments, nested structures, single vs multiline).
> Flag any fix that could break code, loop, or move a comment in a way that changes its meaning.

## 📐 Check ESLint metadata conformance

> Compare the rule's `meta` (`type`, `docs`, `schema`, `messages`) against its actual implementation and against the options used in tests or examples.
> Flag mismatches: an option accepted by `create()` but missing from `schema`, a message id used but not declared, etc.

## 📚 Check README and example sync

> Compare the README's description and configuration examples for the changed rule(s) against the actual behavior implemented.
> Flag any example that would produce different output than what the current code does.

## 🧯 Public API stability check

> List every export change in `src/index.ts` and every rule option added, renamed, or removed.
> Flag anything that isn't backward compatible unless the change is explicitly documented as breaking (see `.agents/commit-message.md` for the `BREAKING CHANGE:` footer).

## ✅ Conclude the review

> Summarize findings as prioritized, actionable recommendations with file and line references.
> State explicitly whether `pnpm build`, `eslint .`, and `vp check` passed.
