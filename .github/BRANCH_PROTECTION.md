# 🔐 Branch Protection Configuration

## Setup Instructions for Repository Administrator

### 1. Create Protected Branches

First, ensure these branches exist:

```bash
git checkout -b develop
git push origin develop

git checkout -b release
git push origin release
```

### 2. Configure Branch Protection Rules

Go to: **Settings → Branches → Add branch protection rule**

---

## 🌿 Branch: `develop`

**Branch name pattern:** `develop`

### Protection Rules:

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: **1**
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners (optional)
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - **Required status checks:**
    - `TypeScript & ESLint` (from quality-checks.yml)
    - `Deploy Preview/Staging/Production` (from deploy-vercel.yml)

- ✅ **Require conversation resolution before merging**
- ✅ **Require linear history** (optional, prevents merge commits)
- ✅ **Do not allow bypassing the above settings**
- ✅ **Restrict who can push to matching branches**
  - Add team: `@navike21/developers` (or specific users)

### Merge Strategy:

- **Allowed:** Squash and merge (recommended)
- **Target:** PRs from `feature/*` branches only

---

## 🧪 Branch: `release`

**Branch name pattern:** `release`

### Protection Rules:

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: **2** (more strict)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - **Required status checks:**
    - `Test Suite & Quality Gates` (from test-quality.yml)
    - `Deploy Preview/Staging/Production` (from deploy-vercel.yml)

- ✅ **Require conversation resolution before merging**
- ✅ **Require linear history**
- ✅ **Do not allow bypassing the above settings**
- ✅ **Restrict who can push to matching branches**
  - Add: `@navike21/leads` or `@navike21/maintainers`

### Merge Strategy:

- **Allowed:** Squash and merge
- **Target:** PRs from `develop` branch only

---

## 🚀 Branch: `main`

**Branch name pattern:** `main`

### Protection Rules:

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: **2** (most strict)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - **Required status checks:**
    - `Test Suite & Quality Gates` (from test-quality.yml)
    - `Deploy Preview/Staging/Production` (from deploy-vercel.yml)

- ✅ **Require conversation resolution before merging**
- ✅ **Require deployments to succeed before merging**
- ✅ **Require linear history**
- ✅ **Do not allow bypassing the above settings**
- ✅ **Restrict who can push to matching branches**
  - Add: `@navike21/maintainers` only

### Merge Strategy:

- **Allowed:** Create a merge commit (for release tracking)
- **Target:** PRs from `release` branch only

---

## 📋 GitFlow Workflow

```
┌─────────────┐
│  feature/*  │ ← Developers work here
└──────┬──────┘
       │ PR (review required)
       ↓
┌─────────────┐
│   develop   │ ← Development environment (Vercel Preview)
└──────┬──────┘
       │ PR (2 reviews required)
       ↓
┌─────────────┐
│   release   │ ← Staging environment (Vercel Preview)
└──────┬──────┘
       │ PR (2 reviews + full tests)
       ↓
┌─────────────┐
│    main     │ ← Production (Vercel Production)
└─────────────┘
```

---

## 🔑 Required GitHub Secrets

Add these secrets in: **Settings → Secrets and variables → Actions**

| Secret Name         | Description                 | How to Get                                         |
| ------------------- | --------------------------- | -------------------------------------------------- |
| `VERCEL_TOKEN`      | Vercel authentication token | https://vercel.com/account/tokens                  |
| `VERCEL_ORG_ID`     | Organization ID             | Run `vercel link` and check `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Project ID                  | Same as above                                      |

---

## 🚦 Status Checks Overview

### For `develop` PRs:

- ✅ TypeScript type checking
- ✅ ESLint code quality
- ✅ Prettier formatting
- 🚀 Vercel preview deployment

### For `release` PRs:

- ✅ All quality checks from develop
- ✅ Full build verification
- 🧪 Unit tests (when implemented)
- 🎭 Integration tests (when implemented)
- 🚀 Vercel staging deployment

### For `main` PRs:

- ✅ All checks from release
- 🚀 Production deployment (requires manual approval)

---

## 📝 Developer Workflow

### 1. Create a feature branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-new-feature
```

### 2. Develop and commit

```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/my-new-feature
```

### 3. Create PR to `develop`

- GitHub Actions will run quality checks
- Vercel will create preview deployment
- Request review from team member
- Address review comments
- Merge when approved ✅

### 4. Release to staging (from `develop` to `release`)

```bash
git checkout release
git pull origin release
# Create PR from develop to release
```

### 5. Deploy to production (from `release` to `main`)

```bash
git checkout main
git pull origin main
# Create PR from release to main
# Requires 2 approvals and all tests passing
```

---

## 🎯 Best Practices

1. **Never commit directly to protected branches**
2. **Always create PRs with descriptive titles**
3. **Write meaningful commit messages** (use conventional commits)
4. **Keep PRs small and focused** (easier to review)
5. **Test locally before pushing** (`pnpm run validate`)
6. **Update branch before creating PR** (avoid conflicts)
7. **Respond to review comments promptly**
8. **Delete feature branches after merge** (keep repo clean)

---

## 🆘 Troubleshooting

### PR checks failing?

```bash
# Run checks locally
pnpm run validate
pnpm run build:ci
```

### Merge conflicts?

```bash
git checkout feature/my-feature
git fetch origin
git rebase origin/develop
# Resolve conflicts
git push --force-with-lease
```

### Deployment failed?

- Check Vercel dashboard for logs
- Verify secrets are configured
- Ensure `vercel.json` is correct
