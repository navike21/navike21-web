module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],
  '*.{json,md,yml,yaml,css,scss}': ['pnpm exec prettier --write']
}
