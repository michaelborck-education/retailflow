# Navbar Template System

## Overview
All pages now use a **single, centralized navbar JavaScript file** to maintain consistent navigation across the entire masterclass website.

## Files

### Core Navbar Script
- **Location:** `js/init-navbar.js`
- **Function:** Automatically generates and manages the navbar for all pages
- **Features:**
  - Detects current page location
  - Automatically calculates correct relative paths
  - Highlights active page/section in navigation
  - Handles both root-level pages and subdirectory pages

### Integration
Every page includes this at the bottom (before `</body>`):
```html
<script src="js/init-navbar.js"></script>
```

For subdirectory pages (crisis, decisions):
```html
<script src="../js/init-navbar.js"></script>
```

## Pages Using This System

✓ **Home Pages:**
  - `index.html` - Home
  - `consultant.html` - Consultant Dashboard

✓ **Crisis Scenarios:**
  - `crisis/crisis-1-data-quality.html`
  - `crisis/crisis-2-staff-resistance.html`
  - `crisis/crisis-3-executive-pressure.html`
  - `crisis/crisis-4-ethical-dilemma.html`

✓ **Decision Pages:**
  - `decisions/scale-or-kill-cases.html`

## Navigation Structure

All pages now have identical navbar:
- **Brand:** RetailFlow Masterclass
- **Links:**
  - Home → `index.html`
  - Dashboard → `consultant.html`
  - Crisis Scenarios → Dropdown with all 4 crises
  - Scale/Kill Decisions → `decisions/scale-or-kill-cases.html`

## How It Works

1. Script runs on page load
2. Detects current file path
3. Determines if page is in subdirectory (crisis/ or decisions/)
4. Generates navbar with correct relative paths
5. Marks current page as "active" in navigation

## Adding New Pages

When adding new pages:

1. Add placeholder navbar comment in HTML body:
   ```html
   <!-- Navigation (auto-generated via js/init-navbar.js) -->
   ```

2. Include script at bottom:
   ```html
   <script src="js/init-navbar.js"></script>
   ```
   (Use `../js/init-navbar.js` if in subdirectory)

3. The navbar will automatically be generated and styled correctly

## Benefits

✅ **Single Source of Truth** - Change navbar once, updates everywhere
✅ **Easy Maintenance** - No duplicate code across 7+ pages
✅ **Automatic Active States** - No manual highlighting needed
✅ **Path Intelligence** - Works from any directory level
✅ **Consistent UX** - All users see identical navigation

## Script Customization

To modify the navbar structure, edit `js/init-navbar.js`:
- Update navbar HTML in the `navbarHTML` template
- Modify active state logic in `setActiveNav()` function
- Add new pages to the Crisis Scenarios dropdown

