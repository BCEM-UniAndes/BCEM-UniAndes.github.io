# BCEM Website

> [!NOTE]
> This is a standard note. Use it to add extra information or context.

This repository contains the source code for the **BCEM (UniAndes)** research group website, built with **Jekyll** using the **multi-language al-folio** theme and deployed via **GitHub Pages**.

---

## 🗂️ Table of Contents

* [1. Setup](#1-setup)

  * [Jekyll](#jekyll)
  * [GitHub Pages](#github-pages)
  * [multi-language-al-folio Theme](#multi-language-al-folio-theme)
  * [Installation & Setup](#installation--setup)
* [2. Relevant Files and Folders](#2-relevant-files-and-folders)

  * [_config.yml](#_configyml)
  * [_pages/](#_pages)
  * [_includes/](#_includes)
  * [_layouts/](#_layouts)
  * [assets/](#assets)
  * [_sass/](#_sass)
* [3. Updating Information](#3-updating-information)

  * [_data/](#_data)
  * [Collections (Dynamic Content)](#collections-dynamic-content)
* [4. Tips](#4-tips)

---

## 🧩 1. Setup

### Jekyll

* Jekyll is a static site generator written in Ruby.
* Installation:

  ```bash
  gem install bundler jekyll
  ```
* Run locally:

  ```bash
  bundle exec jekyll serve
  ```

  Then open [http://localhost:4000](http://localhost:4000).

### GitHub Pages

* The site is hosted automatically by GitHub Pages.
* On every push to the `main` branch, the site is rebuilt and deployed.
* Ensure `_config.yml` and `Gemfile` are correctly configured for GitHub Pages.

### multi-language-al-folio Theme

* Forked from [`george-gca/multi-language-al-folio`](https://github.com/george-gca/multi-language-al-folio).
* Supports multilingual content via separate folders for each locale (e.g. `en-gb`, `es-es`).
* Site text and labels are localized using `_data/*/strings.yml`.

### Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io.git
   cd BCEM-UniAndes.github.io
   ```
2. Install dependencies:

   ```bash
   bundle install
   npm install
   ```
3. Run the site locally:

   ```bash
   bundle exec jekyll serve
   ```
4. To build using Docker:

   ```bash
   docker compose up
   ```

---

## 📁 2. Relevant Files and Folders

### `_config.yml`

Main configuration file. Controls:

* Site settings (title, description, URLs)
* Theme options (language, layout, plugins)
* Navigation structure
* Build settings for GitHub Pages

### `_pages/`

Contains all main static pages for each language version:

* `en-gb/`: English pages (`about.md`, `team.md`, `teaching.md`, etc.)
* `es-es/`: Spanish pages (localized counterparts)
* Each file defines layout and navigation order via YAML front matter.

### `_includes/`

Reusable HTML/Liquid snippets (e.g. `header.liquid`, `footer.liquid`, `team_member.liquid`).
These components are called within page layouts.

### `_layouts/`

Define page structure and templates:

* `default.liquid`: base layout
* `page.liquid`: used by standard content pages
* `team_member.liquid`, `research.liquid`: specific to certain sections

### `assets/`

Holds static assets (images, CSS, JS, PDFs):

* `assets/img/`: all images organized by subfolder (`teampic/`, `collabpic/`, etc.)
* `assets/css/`: CSS and SCSS builds
* `assets/js/`: JavaScript utilities and libraries

### `_sass/`

Custom SCSS partials for styling:

* `_base.scss`, `_layout.scss`, `_themes.scss`: global styles and color variables
* Modify these to adjust theme appearance.

---

## 🔄 3. Updating Information

### `_data/`

YAML files storing structured data for different sections:

* `affiliations_and_sponsors.yml` — Logos and sponsor info
* `collaborators.yml` — External collaborators
* `pictures_gal.yml`, `pictures_gens.yml` — Images for carousels
* `en-gb/strings.yml` and `es-es/strings.yml` — UI translations and labels

When adding a new language, duplicate the `strings.yml` file and translate accordingly.

### Collections (Dynamic Content)

Each content type lives in a separate folder:

* `_news/` — Announcements and updates
* `_teams/` — Lab members and alumni (each member is an `.md` file)
* `_teaching/` — Courses and workshops
* `_research/` — Research areas and projects
* `_pics/` — Image collections

Each item uses **front matter** variables at the top of the file, for example:

```yaml
---
title: "Microbial Ecology"
layout: research
lang: en-gb
order: 1
image: assets/img/research/MicEco.png
description: "Exploring microbial communities using multi-omics."
---
```

Update these metadata fields to modify ordering, language, or visuals.

---

## 💡 4. Tips

* Always verify your YAML syntax (use spaces, not tabs).
* To test site locally with multiple languages, clear `_site/` before rebuilding.
* Avoid editing `_site/` directly — it’s auto-generated.
* For debugging, run:

  ```bash
  bundle exec jekyll build --trace
  ```
