# BCEM Website

Welcome! This repository contains the source code for the multilingual website of the **Computational Biology and Microbial Ecology (BCEM) @ Uniandes** research group, built with **Jekyll** using the **multi-language al-folio** theme and deployed via **GitHub Pages**.

> [!TIP]
> If you're interested in creating a similar multilingual website, feel free to fork this repo and customize it for your own use. However, we recommend checking out (and forking) the original multi-language al-folio theme repository: [george-gca/multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio), which provides detailed documentation on setup and customization, and counts with continuous updates and improvements.

[![deploy](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/actions/workflows/deploy.yml)
[![GitHub license](https://img.shields.io/github/license/BCEM-UniAndes/BCEM-UniAndes.github.io?color=blue)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/BCEM-UniAndes/BCEM-UniAndes.github.io)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io)
[![GitHub forks](https://img.shields.io/github/forks/BCEM-UniAndes/BCEM-UniAndes.github.io)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/fork)

---

The objective of this README is to provide a concise guide on how to set up, customize, and maintain the BCEM's website. It covers the essential components of the Jekyll-based site, including configuration, content management, and deployment.

> [!NOTE]
> Current group member in charge of the site's updates and maintenance: [Camilo García-Botero](https://github.com/camilogarciabotero)

## 🗂️ Table of Contents

1. Setup
   i. and serving the site locally

- Requirements
  - Jekyll
  - Nodejs
  - Jupyterlab
  - ImageMagick
- Clone the repository
  ii. Online deployment
- git add, commit, push
- Setting the repo
  - GitHub Pages
  - GitHub Actions
  - .github/workflows/
  - .github/workflows/deploy.yml

2. General overview of the project
   i. Relevant file types

- Markdown
  - Frontmatter
- YAML
- Liquid
- HTML
  ii. \_config.yml
  iii. \_includes/ & \_layouts/
  iv. \_pages/
  v. \_sass/
  vi. assets/
  vii. \_data/
  viii. Collections (\_news, \_teams, \_pics, etc.)
  ix. \_site/
  x. polyglot

3. Updating info
   i. Home
   ii. News
   iii. Team
   iv. Research
   v. Publications
   vi. Teaching
   vii. Pics
   viii. Contact

4. Best practices & Tips
   i. npx prettier . --write

# 🧩 Setup

## Setting and serving the site locally

### 1. Requirements:

- [Jekyll](https://jekyllrb.com)
  - [Installation Guide](https://jekyllrb.com/docs/installation/) (dont forget to check the requirements section, particularly [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/))
- [Nodejs](https://nodejs.org/)
  - [Installation Guide](https://nodejs.org/en/download)
- [JupyterLab](https://jupyterlab.readthedocs.io/en/latest/#)
  - [Installation Guide](https://jupyterlab.readthedocs.io/en/latest/getting_started/installation.html)
- [ImageMagick](https://imagemagick.org/)
  - [Installation Guide](https://imagemagick.org/script/download.php)

> [!TIP]
> You can use [Conda](https://docs.conda.io/en/latest/) to create an environment with all dependencies. Alternatively, you can use [Docker](https://www.docker.com/) to run the site without installing all dependencies locally through a container.

### 2. Clone the repository:

```bash
git clone https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io.git
cd BCEM-UniAndes.github.io
```

### 3. Install dependencies:

The Gemfile and package.json contain the necessary dependencies for the project. To install them, simplyrun:

```bash
bundle install
npm install
```

### 4. Run the site locally:

To serve the site locally, run:

```bash
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Online deployment

To deploy the site online, you need to push your changes to the GitHub repository. Follow these steps:

1. Stage your changes:

   ```bash
   git add .
   ```

2. Commit your changes:

   ```bash
   git commit -m "Your commit message"
   ```

3. Push your changes:
   ```bash
   git push
   ```

Since the repository is already configured with [GitHub Pages](https://pages.github.com/) and [GitHub Actions](https://github.com/features/actions), the site will be automatically built and deployed. For more details about this, you can check [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) and [here](https://jekyllrb.com/docs/continuous-integration/github-actions/).

> [!IMPORTANT]
> The deployment process is managed through a GitHub Actions workflow defined in the `.github/workflows/deploy.yml` file. This file contains the configuration for the GitHub Actions workflow that builds and deploys the site. You can customize it to fit your needs.

# 🗂️ General overview of the project

This section provides a brief overview of the main components of the Jekyll-based website.

> [!NOTE]
>
> ### Some important file types
>
> - [YAML](https://yaml.org/) (`.yml`) are used to store structured data in a human-readable format. YAML files are commonly used in Jekyll for configuration settings and data files.
> - [Markdown](https://daringfireball.net/projects/markdown/) is a lightweight markup language with plain-text formatting syntax. Markdown files use [YAML frontmatter](https://jekyllrb.com/docs/front-matter/) to define metadata for each page or post. The frontmatter is enclosed within triple dashes (`---`) at the beginning of the file. The content of the page is written in Markdown syntax below the frontmatter. Jekyll processes these files to generate HTML pages for the website.
> - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is a markup language used for structuring content on the web. Jekyll allows you to use HTML files alongside Markdown files to create more complex layouts and designs.
> - [Liquid](https://shopify.github.io/liquid/) is a templating language used in Jekyll to create dynamic content. It allows you to embed variables, loops, and conditional statements within your HTML and Markdown files. By using Liquid, you can create reusable templates and components for your website.

> [!IMPORTANT]
>
> ### Multi-lingual support through Polyglot

### \_config.yml

The `_config.yml` file contains the main configuration settings for the Jekyll site including:

- Site title
- Logo display
- URL
- Theme, layout and feel of the site
- Language settings
- Plugin configurations
- More

### \_includes/ & \_layouts/

The `_includes/` folder contains reusable components (like headers, footers, and navigation bars) that can be included in multiple pages. The `_layouts/` folder contains the overall structure of different types of pages (like default layout, post layout, etc.).

### \_pages/

The `_pages/` folder contains the main pages of the website, such as Home, About, Research, Publications, etc.

### \_sass/

The `_sass/` folder contains the SASS files used for styling the website. These files are compiled into CSS.

### assets/

The `assets/` folder contains static files like images, JavaScript files, and CSS files used throughout the website.

### \_data/

The `_data/` folder contains YAML files that store structured data used in the site, such as team members, publications, and news items.

### Collections (\_news, \_teams, \_pics, etc.)

Collections are custom content types in Jekyll. In this site, collections like `_news`, `_teams`, and `_pics` are used to organize related content.

### \_site/

The `_site/` folder is the output directory where the generated static site is stored after building the Jekyll site.

### polyglot

The `polyglot` folder contains files and configurations related to the multilingual functionality of the website

# 📝 Updating info

This section provides guidelines on how to update different sections of the website.

## Home

To update the Home page, edit the corresponding Markdown file in the `_pages/` folder.

## News

To add or update news items, edit the Markdown files in the `_news/` collection.

## Team

To update team member information, edit the Markdown files in the `_teams/` collection.

## Research

To update research information, edit the corresponding Markdown file in the `_pages/` folder.

## Publications

To add or update publications, edit the YAML file in the `_data/` folder.

## Teaching

To update teaching information, edit the corresponding Markdown file in the `_pages/` folder.

## Pics

To add or update pictures, edit the Markdown files in the `_pics/` collection.

## Contact

To update contact information, edit the corresponding Markdown file in the `_pages/` folder.

# 💡 Best practices & Tips

## Code formatting

To maintain consistent code formatting across the project, you can use Prettier. Run the following command to format all files:

```bash
npx prettier . --write
```
