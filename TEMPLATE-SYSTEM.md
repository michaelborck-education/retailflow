# Template System: Navbar & Footer

## Overview
All pages now use **centralized JavaScript files** for navbar and footer to maintain perfect consistency across the entire masterclass website.

**Edit one file, update everywhere! 🎯**

## Core Files

### 1. Navbar Script
- **Location:** `js/init-navbar.js`
- **Function:** Auto-generates and manages navbar for all pages
- **Features:**
  - Detects current page location
  - Auto-calculates correct relative paths
  - Highlights active page/section
  - Works from root or subdirectories

### 2. Footer Script
- **Location:** `js/init-footer.js`
- **Function:** Auto-generates and manages footer for all pages
- **Features:**
  - Consistent footer across all pages
  - Includes copyright and masterclass info
  - Works from any directory level

## Integration Pattern

Every page uses this pattern:

```html
<!-- Body -->
<body class="nav-fixed">
    <!-- Navigation (auto-generated via js/init-navbar.js) -->
    
    <!-- Main Content Here -->
    
    <!-- Footer (auto-generated via js/init-footer.js) -->
    
    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/init-navbar.js"></script>
    <script src="js/init-footer.js"></script>
</body>
```

For subdirectory pages (crisis/, decisions/), use relative paths:
```html
<script src="../js/init-navbar.js"></script>
<script src="../js/init-footer.js"></script>
```

## Pages Using This System

✓ **Home Pages:**
- `index.html`
- `consultant.html`

✓ **Crisis Scenarios:**
- `crisis/crisis-1-data-quality.html`
- `crisis/crisis-2-staff-resistance.html`
- `crisis/crisis-3-executive-pressure.html`
- `crisis/crisis-4-ethical-dilemma.html`

✓ **Decision Pages:**
- `decisions/scale-or-kill-cases.html`

## Navigation Structure

All pages display identical navbar:
- **Brand:** RetailFlow Masterclass
- **Links:**
  - Home → `index.html`
  - Dashboard → `consultant.html`
  - Crisis Scenarios → Dropdown menu (4 crises)
  - Scale/Kill Decisions → `decisions/scale-or-kill-cases.html`

## Footer Structure

All pages display identical footer:
- Copyright notice: "© 2024 RetailFlow Masterclass"
- Tagline: "AI Project Management Simulation"
- Centered, minimal design

## How It Works

### Navbar Script Logic
1. Runs on page load
2. Detects current file path
3. Checks if in subdirectory (crisis/ or decisions/)
4. Generates navbar with correct relative paths
5. Marks active page/dropdown in navigation

### Footer Script Logic
1. Runs on page load
2. Removes any existing footer
3. Injects standardized footer at end of page
4. Applies consistent styling

## Adding New Pages

When creating new pages:

1. **Add placeholders** in body:
   ```html
   <!-- Navigation (auto-generated via js/init-navbar.js) -->
   <!-- Footer (auto-generated via js/init-footer.js) -->
   ```

2. **Include scripts** before `</body>`:
   ```html
   <script src="js/init-navbar.js"></script>
   <script src="js/init-footer.js"></script>
   ```
   (Use `../js/` if in subdirectory)

3. **That's it!** Navbar and footer auto-generate

## Customization

### Update Navigation
Edit `js/init-navbar.js`:
- Modify `navbarHTML` variable for navbar structure
- Update `setActiveNav()` for active state logic
- Add new links to Crisis Scenarios dropdown

### Update Footer
Edit `js/init-footer.js`:
- Modify `footerHTML` variable for footer content
- Change styling inline or via CSS

## Benefits

✅ **Single Source of Truth** - Change once, updates everywhere instantly
✅ **Zero Duplication** - No duplicate HTML across 7+ pages
✅ **Automatic Active States** - No manual highlighting needed
✅ **Path Smart** - Handles relative paths automatically
✅ **Easy Maintenance** - Update navbar/footer in one place
✅ **Consistent UX** - All users see identical template

## File Sizes Saved

- Removed ~2KB of duplicate navbar HTML per page
- Removed ~1.5KB of duplicate footer HTML per page
- **Total saved: ~25KB of duplicate code!**

## Technical Notes

- Scripts use IIFE pattern to avoid global scope pollution
- Both scripts check for existing elements before injecting
- Works with Bootstrap 5.3 and vanilla JavaScript
- No dependencies beyond Bootstrap

