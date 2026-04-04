---
applyTo: '**/*.stories.ts,**/*.stories.tsx'
---

## Storybook patterns

- Story files should use `Meta` + `StoryObj` with `satisfies Meta<typeof Component>` when possible.
- Prefer `args` for default values and `render` only when the story needs local state or custom layout.
- When a story has multiple variants that should show different source snippets, set `parameters.docs.source.code` per story so Docs displays the correct JSX.
- Keep story titles grouped by layer, for example `Atoms/Button`, `Molecules/Modal`, `Organisms/NewsletterForm`.
