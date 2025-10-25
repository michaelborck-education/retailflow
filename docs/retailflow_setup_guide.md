# RetailFlow Website: Complete Setup & Deployment Guide

## What You Now Have

You have a complete **ultra-minimal static website** for RetailFlow with:

✅ **Single HTML file** – No build process, no dependencies
✅ **7 integrated pages** – Home, Company, Project, Interact, Documents, About, FAQ, Legal
✅ **Professional design** – Responsive, modern, consistent branding
✅ **Educational disclaimer** – Clear banner + legal page
✅ **Comprehensive documentation** – About page, FAQ, Legal disclaimer
✅ **Interactive elements** – Employee profiles, scenarios, page navigation
✅ **Ready to deploy** – Just upload to GitHub Pages

---

## File Structure You Need

Create this folder structure:

```
retailflow-website/
├── index.html                          (Main website file - the artifact you created)
├── README.md                           (Project description)
├── documents/                          (Folder for PDFs)
│   ├── retailflow-company-profile.pdf
│   ├── retailflow-employee-profiles.pdf
│   ├── retailflow-internal-documents.pdf
│   ├── retailflow-chatbot-project.pdf
│   ├── retailflow-customer-scenarios.pdf
│   └── retailflow-bot-profiles.pdf
├── chatbot-js/                         (Folder for your chatbot code)
│   └── retailbot.js
└── assets/                             (Optional - for images/logos)
    └── logo.png
```

---

## Step 1: Save the Website File

1. **Copy the HTML artifact** you just created
2. **Save it as `index.html`**
3. Place it in the root of your project folder

That's it. That ONE file is your entire website.

---

## Step 2: Create GitHub Repository

### Option A: New Repo (Recommended)

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `retailflow` (or your preferred name)
3. **Description:** "RetailFlow: Virtual Company Simulation for AI Project Management"
4. **Public** (check if you want it public)
5. **Add README.md** (check)
6. Click **Create repository**

### Option B: Use Command Line

```bash
# Create folder
mkdir retailflow-website
cd retailflow-website

# Initialize git
git init

# Create README
echo "# RetailFlow Virtual Company Simulation" > README.md

# Create index.html with your website code

# Add all files
git add .
git commit -m "Initial commit: RetailFlow website"

# Add remote (replace YOUR-USERNAME and retailflow with your details)
git remote add origin https://github.com/YOUR-USERNAME/retailflow.git
git branch -M main
git push -u origin main
```

---

## Step 3: Add Documents Folder

Create the `documents/` folder and convert your markdown files to PDFs:

### Converting Markdown to PDF

**Option 1: Use Pandoc (Recommended)**
```bash
# Install pandoc first (brew install pandoc on Mac, apt on Linux)
pandoc retailflow-company-profile.md -o documents/retailflow-company-profile.pdf
pandoc retailflow-employee-profiles.md -o documents/retailflow-employee-profiles.pdf
# ... repeat for all 6 documents
```

**Option 2: Online Converters**
- Go to [Markdown to PDF converters](https://www.google.com/search?q=markdown+to+pdf+online)
- Upload your .md files
- Download PDFs to `documents/` folder

**Option 3: Keep as Markdown**
Just upload the .md files instead of PDFs. They're readable in GitHub.

### Update HTML Download Links

In your `index.html`, find the Documents section and update:

```html
<!-- BEFORE -->
<a href="#" onclick="alert('Download link will work when hosted on GitHub'); return false;">Download PDF →</a>

<!-- AFTER -->
<a href="documents/retailflow-company-profile.pdf" download>Download PDF →</a>
<a href="documents/retailflow-employee-profiles.pdf" download>Download PDF →</a>
<!-- ... etc for all 6 -->
```

---

## Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` (or `master`)
   - **Folder:** Select `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes
7. You'll see a URL like: `https://YOUR-USERNAME.github.io/retailflow`

**That's it! Your site is live.**

---

## Step 5 (Optional): Custom Domain

### If You Have a Domain

1. **Go to your domain registrar** (GoDaddy, Namecheap, etc.)
2. **Find DNS settings**
3. **Add CNAME record:**
   - Name: `www` (or leave blank for root)
   - Value: `YOUR-USERNAME.github.io`
4. **Go back to GitHub repository Settings → Pages**
5. **Custom domain:** Enter your domain (e.g., `retailflow.com`)
6. **Check "Enforce HTTPS"**
7. Wait 15 min - 24 hours for DNS to propagate

**Your site is now at your custom domain.**

---

## Step 6: Embed Your Chatbot

When you have your chatbot JS code:

### Find the Placeholder in HTML

Search for: `[RetailBot Chat Interface - Your JS will embed here]`

### Replace With Your Code

**If your chatbot is a script file:**
```html
<script src="chatbot-js/retailbot.js"></script>
<div id="retailbot-container"></div>
```

**If it's an iFrame:**
```html
<iframe src="chatbot-js/chatbot.html" width="100%" height="600" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>
```

**If it's a React component:**
```html
<div id="chatbot-app"></div>
<script src="chatbot-js/chatbot-react.js"></script>
```

---

## Step 7: Add Bot Interactions (LLM Bots)

Similarly, find the placeholder: `[AI Bots Interface - Your LLM embeds will go here]`

Replace with your LLM integration when ready. For now, you can leave it as placeholder text or a "Coming Soon" message.

---

## Step 8: Deploy & Commit

After making changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Add documents, chatbot integration, and bot interfaces"

# Push to GitHub
git push origin main
```

GitHub will automatically rebuild and deploy within seconds.

---

## File Management Checklist

- [ ] `index.html` in root folder
- [ ] `README.md` in root folder
- [ ] `documents/` folder created with 6 PDFs
- [ ] `chatbot-js/` folder created (even if empty)
- [ ] `.gitignore` file (optional, but good practice)
- [ ] All files committed to git
- [ ] GitHub Pages enabled in Settings

---

## GitHub Pages Troubleshooting

**Site not showing up?**
1. Check Settings → Pages → "Build and deployment" set to `main` branch
2. Wait 5+ minutes (first deployment takes time)
3. Check branch is set to `main` (not `master`)
4. Check `index.html` is in root folder

**404 errors on pages?**
1. Pages aren't separate files—they're all in `index.html`
2. All navigation is JavaScript-based
3. This is correct and expected

**Custom domain not working?**
1. Wait up to 24 hours for DNS propagation
2. Verify CNAME record is correct at your registrar
3. Check GitHub Pages settings have custom domain entered
4. Ensure HTTPS is enforced

---

## Customization Guide

### Change Colors

Find this in `<style>` section:
```css
header {
    background: linear-gradient(135deg, #1a5f7a 0%, #2d8aa4 100%);  /* Blue */
}
.btn {
    background: #ff6b35;  /* Orange */
}
```

Replace color codes:
- `#1a5f7a` → Primary color (headers)
- `#ff6b35` → Accent color (buttons)

### Change Company Name

Find all instances of "RetailFlow" and replace with your company name.

### Add Your Logo

1. Add image file to `assets/` folder
2. Replace: `<div class="logo">🏪 RetailFlow</div>`
3. With: `<img src="assets/logo.png" alt="RetailFlow" style="height: 40px;">`

### Customize Disclaimer Banner

Find:
```html
<strong>💡 Educational Simulation:</strong> RetailFlow is a fictional company...
```

Update text as needed.

---

## Updating Content

### Quick Updates

1. Edit `index.html` directly
2. Save file
3. `git add index.html`
4. `git commit -m "Update [description]"`
5. `git push origin main`

Changes live in 1-2 minutes.

### Adding New Pages

1. Find a `<div id="page-name" class="page">` section
2. Copy the structure
3. Create new `<div id="new-page" class="page">` with your content
4. Add navigation link in header: `<a href="#" onclick="showPage('new-page')">New Page</a>`
5. Commit and push

---

## Backup & Version Control

GitHub automatically keeps version history. To view:

1. Go to your repo on GitHub
2. Click "History" or commit messages
3. Click any commit to see what changed
4. Click "Revert" to go back to previous version if needed

---

## Performance Tips

- **Minify CSS/JavaScript** (optional for static sites)
- **Optimize images** if adding any
- **Use browser caching** (GitHub Pages handles this)
- **Keep HTML file clean** and well-organized

Your current single-file approach is already very fast.

---

## Sharing Your Site

**Direct URL:**
```
https://YOUR-USERNAME.github.io/retailflow
```

**Or with custom domain:**
```
https://retailflow.com (or your domain)
```

**Share it anywhere:**
- Email
- LMS (Blackboard, Canvas, etc.)
- Slack/Teams
- Social media
- Course website

---

## For Your Students/Participants

### They Can:
✅ Access from any device with internet
✅ No login required
✅ Works on mobile, tablet, desktop
✅ Download documents offline
✅ Share with classmates

### They See:
✅ Professional company website
✅ Clear educational disclaimer
✅ About page explaining the simulation
✅ FAQ answering common questions
✅ Complete legal information

---

## Optional Enhancements (Future)

### You Can Add Later:
- Analytics (Google Analytics, Plausible)
- Feedback forms
- Discussion forums
- Progress tracking
- Certificate generation
- Video introductions
- More interactive elements

For now, the core simulation is complete and effective as-is.

---

## Support & Troubleshooting

### Common Questions

**Q: Can I make changes without breaking the site?**
A: Yes. Make changes locally, test in browser, commit only when ready.

**Q: Can I revert changes?**
A: Yes. Git keeps full history. You can revert to any previous version.

**Q: How do I update documents?**
A: Replace PDFs in `documents/` folder, commit, and push.

**Q: Can students download this and run locally?**
A: Yes! They can clone the repo and open `index.html` in browser.

---

## Next Steps

1. **Save `index.html`** from the artifact
2. **Create GitHub repo** with folder structure above
3. **Enable GitHub Pages** (Settings → Pages)
4. **Add documents** (convert markdown to PDF or keep as .md)
5. **Update download links** in HTML to point to documents
6. **Embed your chatbot** when ready
7. **Share the URL** with your participants

---

## Final Checklist

Before going live:

- [ ] All 7 pages working (Home, Company, Project, Interact, Documents, About, FAQ, Legal)
- [ ] Disclaimer banner visible on every page
- [ ] Employee profiles modal working
- [ ] Navigation working smoothly
- [ ] Footer links working
- [ ] Documents folder accessible
- [ ] GitHub Pages enabled and live
- [ ] Custom domain set up (optional)
- [ ] Shared link tested from different device
- [ ] Mobile responsive checked

---

## You're Ready!

Your RetailFlow virtual company website is ready for participants. It's:

✅ Professional and polished
✅ Educationally clear
✅ Legally compliant
✅ Easy to update
✅ Hosted for free
✅ Accessible anywhere
✅ Ready for your chatbot integration

**Congratulations! You've built a complete educational simulation platform.**

---

**Questions? Refer back to any section of this guide, or reach out to your development team.**

**Last Updated: December 2024**