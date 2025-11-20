# 🔑 Vercel Integration Setup

## Step-by-Step Guide to Configure Vercel with GitHub Actions

### Prerequisites

- Vercel account with your project deployed
- GitHub repository admin access
- Terminal with Vercel CLI installed

---

## 1️⃣ Install Vercel CLI (if not already installed)

```bash
npm install -g vercel@latest
# or
pnpm add -g vercel@latest
```

---

## 2️⃣ Link Your Project

```bash
cd /path/to/navike21-web
vercel link
```

Follow the prompts:

- **Set up and deploy?** → Yes
- **Which scope?** → Select your team/account
- **Link to existing project?** → Yes
- **What's the name?** → navike21

This creates a `.vercel` directory with `project.json`

---

## 3️⃣ Get Required Values

### Get Organization ID and Project ID:

```bash
cat .vercel/project.json
```

Output example:

```json
{
  "projectId": "prj_abc123xyz",
  "orgId": "team_xyz789abc"
}
```

**Save these values:**

- `projectId` → This is your `VERCEL_PROJECT_ID`
- `orgId` → This is your `VERCEL_ORG_ID`

---

## 4️⃣ Generate Vercel Token

1. Go to https://vercel.com/account/tokens
2. Click **"Create Token"**
3. Name: `GitHub Actions - navike21-web`
4. Scope: Select your team/account
5. Expiration: Choose based on your security policy (recommend: 1 year)
6. Click **"Create"**
7. **Copy the token immediately** (you won't see it again!)

**Save this as:** `VERCEL_TOKEN`

---

## 5️⃣ Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to: **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"** for each:

### Add these secrets:

| Secret Name         | Value                 | Example          |
| ------------------- | --------------------- | ---------------- |
| `VERCEL_TOKEN`      | Token from step 4     | `vKj8dHj...`     |
| `VERCEL_ORG_ID`     | orgId from step 3     | `team_xyz789abc` |
| `VERCEL_PROJECT_ID` | projectId from step 3 | `prj_abc123xyz`  |

---

## 6️⃣ Verify Configuration

### Check `.vercel/project.json` content:

```json
{
  "projectId": "prj_OZpYTmKK3AaoaDzmJ9OEhxhKmsPq",
  "orgId": "team_HlO61rBCXDgQTkK5byfxEoEk",
  "projectName": "navike21"
}
```

### Ensure `.vercel` is in `.gitignore`:

```bash
# Should already be there, but verify:
grep -q ".vercel" .gitignore && echo "✅ .vercel is ignored" || echo "❌ Add .vercel to .gitignore"
```

---

## 7️⃣ Test the Integration

### Create a test PR:

```bash
git checkout -b test/vercel-integration
echo "# Testing Vercel Integration" >> README.md
git add README.md
git commit -m "test: verify Vercel GitHub Actions integration"
git push origin test/vercel-integration
```

### Create PR on GitHub:

- Go to your repository
- Click "Compare & pull request"
- Target: `develop` branch
- Create the PR

### Expected Behavior:

1. ✅ Quality checks run
2. 🚀 Vercel deployment starts
3. 💬 Bot comments with preview URL
4. 🔗 Preview URL is clickable in the PR

---

## 8️⃣ Environment-Specific Deployments

### How it works:

| PR Target | Environment | URL Pattern             | Vercel Env |
| --------- | ----------- | ----------------------- | ---------- |
| `develop` | Preview     | `navike21-*.vercel.app` | Preview    |
| `release` | Staging     | `navike21-*.vercel.app` | Preview    |
| `main`    | Production  | `navike21.vercel.app`   | Production |

### Vercel will automatically:

- Create preview deployments for PRs
- Deploy to production when merging to `main`
- Show deployment status in GitHub

---

## 9️⃣ Configure Vercel Project Settings (Optional)

Go to: https://vercel.com/navike21/navike21/settings

### Recommended Settings:

#### Git:

- ✅ Production Branch: `main`
- ✅ Preview Branches: `develop`, `release`, `feature/*`
- ⚠️ **Disable** "Auto Deploy" (GitHub Actions will handle this)

#### Environment Variables:

Add any required env vars:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_GA_ID`
- etc.

Make sure to set appropriate scopes (Production, Preview, Development)

---

## 🔍 Troubleshooting

### Issue: "Error: Unauthorized"

**Solution:** Regenerate `VERCEL_TOKEN` and update the secret

### Issue: "Error: Project not found"

**Solution:** Verify `VERCEL_PROJECT_ID` matches `.vercel/project.json`

### Issue: "Error: Team not found"

**Solution:** Verify `VERCEL_ORG_ID` and ensure token has correct scope

### Issue: Deployment not starting

**Solution:**

1. Check GitHub Actions logs
2. Verify all 3 secrets are set correctly
3. Ensure Vercel project is properly linked

### Issue: Bot not commenting on PR

**Solution:**

1. Check GitHub Actions permissions (Settings → Actions → General)
2. Ensure "Read and write permissions" is enabled
3. Check "Allow GitHub Actions to create and approve pull requests"

---

## 📊 Monitoring Deployments

### In Vercel:

- Dashboard: https://vercel.com/navike21/navike21
- See all deployments, logs, and metrics

### In GitHub:

- Actions tab: See workflow runs
- PR comments: Get deployment URLs
- Checks: See deployment status

---

## 🎉 Success Checklist

- ✅ `.vercel/project.json` exists and has correct IDs
- ✅ All 3 secrets added to GitHub
- ✅ Test PR created and checks passed
- ✅ Vercel deployment comment appears on PR
- ✅ Preview URL works and shows your app
- ✅ Production deployment works when merging to `main`

---

## 🔗 Useful Links

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel GitHub Actions](https://github.com/marketplace/actions/vercel-action)
- [Vercel Deployments](https://vercel.com/docs/deployments/overview)
- [Managing Tokens](https://vercel.com/docs/rest-api#authentication)
