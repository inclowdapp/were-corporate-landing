# Fix mobile close button visibility in ProductModal

**Problem:** On mobile, the product detail modal slides up from the bottom (`items-end`, `rounded-t-3xl`). The close "X" button is absolutely positioned at `top-4 right-4` of the modal container — which sits over the product image at the very top of the sheet. On small screens this area is often above the fold or blends into the image, so users can't find how to close it.

**Fix (single file: `src/components/site/ProductModal.tsx`):**

1. On mobile, pin the close button to the viewport (fixed) instead of the modal top, so it's always visible regardless of scroll position inside the sheet. On `sm+` keep current absolute positioning inside the card.
   - Change classes from `absolute right-4 top-4 …` to `fixed right-4 top-4 sm:absolute …` with a higher `z-20` and stronger contrast (solid background + ring + shadow) so it stands out against product photos.

2. Add a small visual grab handle at the top of the mobile sheet (`h-1.5 w-12 rounded-full bg-foreground/20 mx-auto mt-2 sm:hidden`) so it's clear the panel is a dismissible sheet.

3. Also allow closing by tapping the backdrop (already works) — no change, but ensure the sheet has a bit of top padding on mobile so the fixed X doesn't overlap the category chip when scrolled.

**Out of scope:** No changes to Lightbox, data, i18n, or layout beyond the close-button positioning and the grab handle.
