#!/bin/bash
# Verification script for AnimatedLogin installation

echo "🛫 Verifying AnimatedLogin Installation"
echo "========================================="
echo ""

# Check if component files exist
echo "📁 Checking component files..."
files=(
  "components/AnimatedLogin/AnimatedLogin.tsx"
  "components/AnimatedLogin/AircraftMascot.tsx"
  "components/AnimatedLogin/animations.ts"
  "components/AnimatedLogin/index.ts"
)

all_exist=true
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (MISSING)"
    all_exist=false
  fi
done

echo ""
echo "📄 Checking documentation..."
docs=(
  "components/AnimatedLogin/README.md"
  "components/AnimatedLogin/INTEGRATION.md"
  "components/AnimatedLogin/DESIGN_SPEC.md"
)

for doc in "${docs[@]}"; do
  if [ -f "$doc" ]; then
    echo "  ✅ $doc"
  else
    echo "  ⚠️  $doc (Optional)"
  fi
done

echo ""
echo "🎨 Checking CSS animations..."
if grep -q "@keyframes float" index.css; then
  echo "  ✅ Float animation found in index.css"
else
  echo "  ❌ Float animation missing - check index.css"
fi

if grep -q "@keyframes shake" index.css; then
  echo "  ✅ Shake animation found in index.css"
else
  echo "  ❌ Shake animation missing - check index.css"
fi

echo ""
echo "🔧 Checking App.tsx..."
if grep -q "AnimatedLogin" App.tsx; then
  echo "  ✅ AnimatedLogin imported in App.tsx"
else
  echo "  ⚠️  AnimatedLogin not yet integrated in App.tsx"
  echo "     👉 Update App.tsx to import and use AnimatedLogin"
fi

echo ""
echo "📦 Checking dependencies..."
if grep -q '"react":' package.json; then
  echo "  ✅ React installed"
else
  echo "  ❌ React not found"
fi

if grep -q '"tailwindcss":' package.json; then
  echo "  ✅ Tailwind CSS installed"
else
  echo "  ❌ Tailwind CSS not found"
fi

if grep -q '"lucide-react":' package.json; then
  echo "  ✅ Lucide React installed"
else
  echo "  ❌ Lucide React not found"
fi

echo ""
echo "✅ INSTALLATION VERIFICATION COMPLETE"
echo "========================================="
echo ""
echo "Next steps:"
echo "  1. Import AnimatedLogin in App.tsx"
echo "  2. Replace PasswordGate component"
echo "  3. Run: npm run dev"
echo "  4. Test the login page"
echo ""
echo "For detailed instructions, see:"
echo "  📖 components/AnimatedLogin/INTEGRATION.md"
