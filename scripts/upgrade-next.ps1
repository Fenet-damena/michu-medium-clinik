# PowerShell helper script to upgrade Next.js to latest, update pnpm lockfile, build, and commit
# Run this from the repository root in an elevated PowerShell session if possible.

Write-Host "Starting Next.js upgrade helper..." -ForegroundColor Cyan

# Enable Corepack and prepare pnpm@10
Write-Host "Enabling corepack and preparing pnpm@10..." -ForegroundColor Yellow
try {
  corepack enable
  corepack prepare pnpm@10 --activate
} catch {
  Write-Warning "Corepack prepare failed. Trying to install pnpm globally via npm..."
  npm install -g pnpm
}

# Verify pnpm
$pnpm = (Get-Command pnpm -ErrorAction SilentlyContinue)
if (-not $pnpm) {
  Write-Error "pnpm is not available. Please run this script as admin or install pnpm manually: npm install -g pnpm"
  exit 1
}

Write-Host "pnpm version: $(pnpm -v)" -ForegroundColor Green

# Upgrade next and typescript
Write-Host "Installing next@latest and typescript@^5.1.0..." -ForegroundColor Yellow
pnpm add next@latest
pnpm add -D typescript@^5.1.0

# Install to regenerate lockfile
Write-Host "Running pnpm install to update pnpm-lock.yaml..." -ForegroundColor Yellow
pnpm install
if ($LASTEXITCODE -ne 0) {
  Write-Error "pnpm install failed. Inspect the output above and fix issues (permissions, network, etc)."
  exit $LASTEXITCODE
}

# Build
Write-Host "Building project..." -ForegroundColor Yellow
pnpm run build
if ($LASTEXITCODE -ne 0) {
  Write-Error "Build failed. Fix build errors locally and re-run this script."
  exit $LASTEXITCODE
}

# Get resolved next version
$resolved = pnpm list next --depth 0 | Select-String -Pattern "next@" -SimpleMatch | ForEach-Object { $_.ToString().Trim() }
Write-Host "Resolved Next version: $resolved" -ForegroundColor Green

# Suggest pinning: extract version number
if ($resolved -match "next@(\S+)") {
  $ver = $matches[1]
  Write-Host "Pinning package.json 'next' to $ver..." -ForegroundColor Yellow
  $pkg = Get-Content package.json -Raw | ConvertFrom-Json
  $pkg.dependencies.next = $ver
  $pkg.devDependencies.typescript = "^5.1.0"
  $pkg | ConvertTo-Json -Depth 10 | Set-Content package.json -Encoding utf8
}

# Commit changes
Write-Host "Staging and committing package.json and pnpm-lock.yaml..." -ForegroundColor Yellow
git add package.json pnpm-lock.yaml
git commit -m "chore: upgrade Next.js to latest ($ver) and update pnpm lockfile" -ErrorAction SilentlyContinue
if ($LASTEXITCODE -ne 0) {
  Write-Warning "Git commit failed or nothing to commit. Check status and commit manually if needed."
} else {
  git push
}

Write-Host "Done. If the Vercel deploy still fails, paste the Vercel logs here and I will help further." -ForegroundColor Cyan
