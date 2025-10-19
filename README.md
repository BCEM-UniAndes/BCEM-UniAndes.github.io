# BCEM Website

Welcome! This repository contains the source code for the multilingual website of the **Computational Biology and Microbial Ecology (BCEM) @ Uniandes** research group, built with **Jekyll** using the **multi-language al-folio** theme and deployed via **GitHub Pages**.

> [!TIP]
> If you're interested in creating a similar website, feel free to fork this repo and customize it for your own use. However, we recommend checking out (and forking) the original multi-language al-folio theme repository: [george-gca/multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio), which provides detailed documentation on setup and customization, and counts with continuous updates and improvements.

[![deploy](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/actions/workflows/deploy.yml)
[![GitHub license](https://img.shields.io/github/license/BCEM-UniAndes/BCEM-UniAndes.github.io?color=blue)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/BCEM-UniAndes/BCEM-UniAndes.github.io)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io)
[![GitHub forks](https://img.shields.io/github/forks/BCEM-UniAndes/BCEM-UniAndes.github.io)](https://github.com/BCEM-UniAndes/BCEM-UniAndes.github.io/fork)

---

The objective of this README is to provide a concise guide on how to set up, customize, and maintain the BCEM's website. It covers the essential components of the Jekyll-based site, including configuration, content management, and deployment.

> [!NOTE]
> Current group member in charge of the site's updates and maintenance: [Camilo García](https://github.com/camilogarciabotero)

## 🗂️ Table of Contents

1) Setup
i. and serving the site locally
  - Requirements
    - Jekyll
    - Nodejs
    - Jupyterlab
    - ImageMagick
  - git clone
   - cd BCEM-UniAndes.github.io
  - bundle exec jekyll serve
  > Callout: using Docker or conda
ii. Online deployment
  - git add, commit, push 
  - Setting the repo
    * GitHub Pages
    * GitHub Actions
    * .github/workflows/
    * .github/workflows/deploy.yml
iii. polyglot

2) Relevant files and folders/general overview
i. 
  - Markdown 
    - Frontmatter
  - YAML
  - Liquid
  - HTML
ii. _config.yml
iii. _includes/ & _layouts/
iv. _pages/
v. _sass/
vi. asstets/
vii. _data/
viii. Collections (_news, _teams, _pics, etc.)
ix. _site/

3) Updating info
i. Home
ii. News
iii. Team
iv. Research
v. Publications
vi. Teaching
vii. Pics
viii. Contact


4) Best practices & Tips
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

> [!NOTE]
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

> [!NOTE]
> The deployment process is managed through a GitHub Actions workflow defined in the `.github/workflows/deploy.yml` file. This file contains the configuration for the GitHub Actions workflow that builds and deploys the site. You can customize it to fit your needs.

## Multi-language Support with Polyglot
The website supports multiple languages using the Polyglot Jekyll plugin. To add or modify languages, you can edit the `_config.yml` file and the corresponding language files in the `_data/` directory.