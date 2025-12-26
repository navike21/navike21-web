# Pull Request

## 🧾 Summary (required)

<!-- Even for tiny PRs, fill this out. Keep it short but explicit. -->

- **What:**
- **Why:**
- **Impact / User-facing:**

---

## 🏷️ Title format (required)

Use Conventional Commits in the PR title:

Recommended (when an issue exists):

`<type>(<scope>): <short description> (#<issue>)`

Allowed (when there is no issue):

`<type>(<scope>): <short description>`

Notes:

- Use lowercase for `type` and `scope`.
- Keep the description imperative and short (≤ 72 chars).
- Add `!` for breaking changes.
- `(#<issue>)` is recommended when an issue exists.

---

## 🧩 Type of change

<!-- Mark one main type (or a couple if truly needed) -->

- [ ] feat (new feature)
- [ ] fix (bug fix)
- [ ] refactor (no functional change)
- [ ] style (formatting, lint, UI polish)
- [ ] perf (performance improvement)
- [ ] docs (documentation)
- [ ] test (tests only)
- [ ] build (build/dependencies)
- [ ] ci (pipelines/automation)
- [ ] chore (internal/maintenance)
- [ ] revert

---

## 🧭 Scope

<!-- Affected areas/modules -->

- [ ] web
- [ ] api
- [ ] ui
- [ ] auth
- [ ] seo
- [ ] i18n
- [ ] config
- [ ] infra
- [ ] other: **\*\*\*\***\_\_**\*\*\*\***

---

## 🔗 Links (when applicable)

| Item              | Link     |
| ----------------- | -------- |
| Issue             | Closes # |
| Related PRs       | Refs #   |
| Vercel Preview    |          |
| SonarCloud Report |          |
| Docs/Spec         |          |

---

## ✅ Changes (required)

<!-- Prefer a table so reviewers can scan quickly. -->

| Area | Path(s) | Change | Risk         | Notes |
| ---- | ------- | ------ | ------------ | ----- |
|      |         |        | low/med/high |       |

---

## 🧪 How to test (required)

<!-- Use "N/A" only when truly not applicable. -->

### Steps

1.
2.

### Commands (required for code changes)

<!--
Required when the PR changes application code (typically `src/**`).
If the PR only changes docs/CI/config and does not affect `src/**`, mark this section as N/A.
-->

| Check              | Command              | Result  |
| ------------------ | -------------------- | ------- |
| Typecheck + lint   | `pnpm validate`      | ✅ / ❌ |
| Tests              | `pnpm test`          | ✅ / ❌ |
| Coverage (min 90%) | `pnpm test:coverage` | ✅ / ❌ |

### Coverage summary (required for code changes)

<!--
Required when the PR changes application code (typically `src/**`).
If the PR does not touch `src/**`, write: N/A.
-->

<!-- Paste the summary numbers from the report (or link the CI job/artifact). -->

| Metric     | %   |
| ---------- | --- |
| Lines      |     |
| Functions  |     |
| Branches   |     |
| Statements |     |

Policy: minimum coverage **≥ 90%** (target 100% when feasible).

---

## 👥 Authors / Contributors (optional)

<!-- GitHub already shows the PR author. Use this for pair/mob programming or multiple contributors. -->

- Author: @
- Contributors: @ @

---

## 📸 Screenshots / Recordings (UI changes)

<!-- Drag and drop images or videos here. Add before/after if relevant. -->

---

## 🗂️ Affected structure (when useful)

<!-- If you added/moved folders/files, include a small tree. -->

```text
src/
 ...
```

---

## 💻 Code excerpts (optional)

<!-- Paste a small snippet when it helps reviewers. Keep it short. -->

```ts
// example
```

---

## ⚠️ Breaking Changes

- [ ] No
- [ ] Yes

If **Yes**, describe clearly:

```text
What breaks?
Who is affected?
What migration or action is required?
```

---

## 🚀 Performance impact

- [ ] No impact
- [ ] Improved
- [ ] Potential regression

Details:

<!-- Bundle size, metrics, benchmarks, Lighthouse, etc -->

---

## 🔐 Security considerations

- [ ] No impact
- [ ] Yes

If **Yes**, explain:

<!-- auth, data exposure, permissions, secrets -->

---

## ♿ Accessibility (UI changes)

- [ ] Not applicable
- [ ] Verified (keyboard, contrast, aria)
- [ ] Needs review

---

## 🧪 Tests

- [ ] Not required
- [ ] Existing tests updated
- [ ] New tests added

Details:

<!-- unit / integration / e2e -->

---

## ✅ Checklist

- [ ] PR title follows Conventional Commits
- [ ] Issue reference included (`#ID`) when applicable (recommended)
- [ ] Code follows project standards
- [ ] TypeScript strict mode respected
- [ ] No `any` types introduced
- [ ] No `console.*` statements or `debugger` left in code
- [ ] No empty `catch {}` blocks (errors handled or rethrown)
- [ ] Lint and tests are passing
- [ ] Documentation updated (if needed)
