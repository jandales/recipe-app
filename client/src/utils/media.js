/** Soft food-themed SVG placeholder when image is missing/broken */
export const PLACEHOLDER_RECIPE =
  'data:image/svg+xml,' +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E8F2EA"/>
      <stop offset="100%" stop-color="#D7E8DB"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="400" cy="250" r="70" fill="#72A67A" opacity="0.35"/>
  <rect x="280" y="340" width="240" height="18" rx="9" fill="#245C43" opacity="0.25"/>
  <rect x="320" y="375" width="160" height="12" rx="6" fill="#245C43" opacity="0.15"/>
</svg>`)

export const PLACEHOLDER_AVATAR =
  'data:image/svg+xml,' +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
  <rect width="96" height="96" rx="48" fill="#E8F2EA"/>
  <circle cx="48" cy="38" r="16" fill="#72A67A"/>
  <ellipse cx="48" cy="78" rx="28" ry="18" fill="#245C43" opacity="0.55"/>
</svg>`)

export function recipeImageUrl(recipe) {
  if (!recipe?.image) return PLACEHOLDER_RECIPE
  if (String(recipe.image).startsWith('http')) return recipe.image
  return recipe.image
}

export function userAvatarUrl(user) {
  if (!user?.image) return PLACEHOLDER_AVATAR
  if (user.provider && String(user.image).startsWith('http')) return user.image
  if (String(user.image).startsWith('http')) return user.image
  return user.image
}

export function onImgError(event, fallback = PLACEHOLDER_RECIPE) {
  const el = event?.target
  if (!el || el.dataset.fallbackApplied) return
  el.dataset.fallbackApplied = '1'
  el.src = fallback
}
