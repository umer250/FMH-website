# Asset Handling Guide - FMH HOSIERY

This guide explains how to organize images for the website to ensuring everything looks professional and loads correctly.

## 1. Folder Structure
Please create the following folders inside the `public/images` directory (we will create this for you):

```
public/
└── images/
    ├── home/           # Hero slider, background images
    ├── knitwear/       # Gents, Ladies, Kids sweater photos
    ├── yarn/           # Raw material (Yarn/Fabric) photos
    ├── machines/       # Imported machine photos (Sixing, 122FF)
    ├── manufacturing/  # Factory, workforce, QC photos
    └── gallery/        # Mixed photos for the gallery page
```

## 2. Naming Convention
Please use **lowercase** letters and **hyphens** instead of spaces. This prevents broken links.

- **Bad**: `Gents Sweater 01.jpg`, `Machine_Image(1).png`
- **Good**: `gents-sweater-01.jpg`, `sixing-machine-front.jpg`

## 3. Recommended Image Sizes

| Section | Image Type | Recommended Size (px) | Format |
|---------|------------|-----------------------|--------|
| **Hero/Banner** | Full width background | 1920 x 1080 | JPG/WebP |
| **Product Cards** | Listings | 800 x 800 (Square) | JPG/WebP |
| **Machine Details** | Detailed view | 1200 x 800 | JPG/WebP |
| **Gallery/Grid** | Thumbnail | 600 x 600 | JPG/WebP |

## 4. AI Generated Images
If you don't have high-quality photos yet, we can generate placeholders.
- **Location**: `public/images/placeholders/`
- **Style**: Industrial, Cinematic Lighting, Realistic.

## 5. Sending Files
You can paste the images directly into the folders on your computer:
`e:\FMH website\public\images\...`
