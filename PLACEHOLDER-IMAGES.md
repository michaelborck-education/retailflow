# Placeholder Images - Replacement Guide

This document describes all placeholder images used in the RetailFlow website. Replace these with real images as you source or create them.

All placeholders use [placeholder.com](https://placeholder.com/) which provides free, fast-loading placeholder images.

---

## Homepage (index.html)

### 1. Hero Image
- **Location:** Top of homepage
- **Current URL:** `https://placeholder.com/1200x300?text=RetailFlow+Hero`
- **Dimensions:** 1200x300px
- **Suggested Content:** Retail storefront, modern e-commerce warehouse, or busy distribution center
- **Purpose:** Eye-catching header for homepage
- **Replacement Ideas:**
  - Modern retail store interior with product displays
  - Aerial view of warehouse/fulfillment center
  - Diverse team in retail environment
  - Clean, professional e-commerce aesthetic

---

### 2. Shop Our Collections Card
- **Location:** Homepage, first card (left)
- **Current URL:** `https://placeholder.com/400x200?text=Shop+Collections`
- **Dimensions:** 400x200px
- **Suggested Content:** Product showcase, shopping bags, product variety
- **Purpose:** Visual representation of shopping experience
- **Replacement Ideas:**
  - Array of colorful products (fashion, electronics, home goods)
  - Shopping bags and parcels
  - Product display shelf

---

### 3. Customer Support Card
- **Location:** Homepage, second card (right)
- **Current URL:** `https://placeholder.com/400x200?text=Customer+Support`
- **Dimensions:** 400x200px
- **Suggested Content:** Customer service team, headsets, communication
- **Purpose:** Show customer-centric values
- **Replacement Ideas:**
  - Customer service team on calls
  - Support representatives in office
  - Chat/communication icons
  - Friendly service representative

---

### 4. Track Your Order Card
- **Location:** Homepage, third card (left)
- **Current URL:** `https://placeholder.com/400x200?text=Track+Orders`
- **Dimensions:** 400x200px
- **Suggested Content:** Tracking, logistics, delivery
- **Purpose:** Illustrate real-time tracking capability
- **Replacement Ideas:**
  - Package/parcel in transit
  - Delivery truck on road
  - Tracking map or route visualization
  - Delivery person with package

---

### 5. Join Our Team Card
- **Location:** Homepage, fourth card (right)
- **Current URL:** `https://placeholder.com/400x200?text=Careers`
- **Dimensions:** 400x200px
- **Suggested Content:** Team collaboration, workplace culture, diverse workforce
- **Purpose:** Attract talent and show company culture
- **Replacement Ideas:**
  - Diverse team in modern office
  - Team meeting or brainstorm session
  - Collaborative workspace
  - Happy employees at work

---

## Company Pages (company/about.html)

### 6. Company About Hero Image
- **Location:** Top of company about page
- **Current URL:** `https://placeholder.com/1200x300?text=RetailFlow+Company`
- **Dimensions:** 1200x300px
- **Suggested Content:** Company headquarters, office environment, corporate setting
- **Purpose:** Professional company representation
- **Replacement Ideas:**
  - RetailFlow office building/headquarters
  - Modern corporate office interior
  - Company logo with professional background
  - Team in company environment

---

## Training Pages (training/about.html)

### 7. Training Program Hero Image
- **Location:** Top of training about page
- **Current URL:** `https://placeholder.com/1200x300?text=Training+Program`
- **Dimensions:** 1200x300px
- **Suggested Content:** Classroom, training session, executive education
- **Purpose:** Set expectations for training program
- **Replacement Ideas:**
  - Professional classroom or workshop setting
  - Facilitator leading group discussion
  - Participants engaged in training exercise
  - Boardroom or seminar room
  - Laptop/training materials on desk

---

## Crisis Scenarios (crisis/*.html)

### 8. Crisis 1: Data Quality Disaster
- **Location:** Header of crisis-1-data-quality.html
- **Current URL:** `https://placeholder.com/1000x250?text=Crisis+1:+Data+Quality`
- **Dimensions:** 1000x250px
- **Suggested Content:** Data visualization, error messages, technical issues
- **Purpose:** Visual representation of data quality crisis
- **Replacement Ideas:**
  - Dashboard with error alerts
  - Database errors or corrupted data visualization
  - Red alert/warning symbols
  - Server error screen
  - Data quality metrics showing failures

---

### 9. Crisis 2: Staff Resistance
- **Location:** Header of crisis-2-staff-resistance.html
- **Current URL:** `https://placeholder.com/1000x250?text=Crisis+2:+Staff+Resistance`
- **Dimensions:** 1000x250px
- **Suggested Content:** Team conflict, resistance, communication challenges
- **Purpose:** Illustrate organizational/people challenges
- **Replacement Ideas:**
  - Team meeting with tension/disagreement
  - Confused or frustrated team members
  - Communication breakdown visualization
  - Organizational change resistance symbols
  - Crossed arms/resistant body language

---

### 10. Crisis 3: Executive Pressure
- **Location:** Header of crisis-3-executive-pressure.html
- **Current URL:** `https://placeholder.com/1000x250?text=Crisis+3:+Executive+Pressure`
- **Dimensions:** 1000x250px
- **Suggested Content:** Executive boardroom, pressure, high stakes
- **Purpose:** Show executive/leadership challenges
- **Replacement Ideas:**
  - Executive boardroom meeting
  - Pressured decision-making scenario
  - Executive team in serious discussion
  - High-stakes business meeting
  - Clock/deadline pressure symbols

---

### 11. Crisis 4: Ethical Dilemma
- **Location:** Header of crisis-4-ethical-dilemma.html
- **Current URL:** `https://placeholder.com/1000x250?text=Crisis+4:+Ethical+Dilemma`
- **Dimensions:** 1000x250px
- **Suggested Content:** Ethics, decision-making, moral choices
- **Purpose:** Represent ethical/moral complexity
- **Replacement Ideas:**
  - Balance scale (weighing options)
  - Crossroads/decision point visual
  - Two conflicting paths/choices
  - Ethics/compliance symbols
  - Thoughtful decision-making scenario

---

## Strategic Decisions Page (decisions/scale-or-kill-cases.html)

### 12. Scale or Kill Strategic Decisions
- **Location:** Header of scale-or-kill-cases.html
- **Current URL:** `https://placeholder.com/1000x250?text=Scale+or+Kill+Decisions`
- **Dimensions:** 1000x250px
- **Suggested Content:** Strategic decision-making, growth vs. shutdown
- **Purpose:** Illustrate strategic portfolio decisions
- **Replacement Ideas:**
  - Growth arrows vs. shutdown symbols
  - Portfolio/investment decision visualization
  - Two paths: growth and decline
  - Strategic decision matrix
  - Business portfolio management

---

## Image Replacement Instructions

### Step 1: Find/Create Images
- Search stock photo sites: Unsplash, Pexels, Pixabay (free), or Shutterstock/Getty (paid)
- Recommended terms to search: See "Replacement Ideas" for each image
- If creating custom images, use consistent branding and style

### Step 2: Optimize Images
- Resize to specified dimensions (see list above)
- Compress for web (aim for < 200KB per image)
- Use appropriate format: JPG for photos, PNG for graphics

### Step 3: Upload Images
- Create an `images/` folder in the project root if it doesn't exist
- Upload optimized images to this folder
- Name them descriptively (e.g., `homepage-hero.jpg`, `crisis-1-data.jpg`)

### Step 4: Update HTML
Replace placeholder URLs in HTML files:

**Before:**
```html
<img src="https://placeholder.com/1200x300?text=RetailFlow+Hero" alt="RetailFlow Hero">
```

**After:**
```html
<img src="images/homepage-hero.jpg" alt="RetailFlow Hero">
```

---

## Recommended Tools for Image Processing

1. **Resizing:** ImageMagick, Photoshop, or online tools like Pixlr
2. **Compression:** TinyPNG, ImageOptim (Mac), or PunyPNG
3. **Stock Photos:** 
   - Free: Unsplash, Pexels, Pixabay, Pxhere
   - Paid: Shutterstock, Getty Images, iStock
4. **Design:** Canva, Figma (good for creating custom graphics)

---

## Current Statistics

- **Total Placeholder Images:** 12
- **Hero Images:** 4 (1200x300px)
- **Card Images:** 4 (400x200px)  
- **Scenario/Decision Images:** 4 (1000x250px)
- **Source:** placeholder.com (fast, reliable, free)

---

## Notes

- All placeholder images load quickly and don't impact performance
- Images are responsive and will scale on mobile/tablet
- Alt text is included for accessibility
- Consider consistent visual style when replacing (color palette, photography style, tone)
- Update this document when you replace images so others know what's been done

---

**Last Updated:** October 20, 2024
