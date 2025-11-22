# BCEM Website

Welcome! This repository contains the source code for the multilingual website of the **[Computational Biology and Microbial Ecology (BCEM)](https://bcem-uniandes.github.io/) @ [Uniandes](https://www.uniandes.edu.co/)** research group, built with **[Jekyll](https://jekyllrb.com/)** using the **[multi-language al-folio](https://george-gca.github.io/multi-language-al-folio/)** theme and deployed via **[GitHub Pages](https://docs.github.com/en/pages)**.

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

# 🗂️ Table of Contents

- [🧩 Setup](#-setup)
  - [Setting and serving the site locally](#setting-and-serving-the-site-locally)
    - [1. Requirements](#1-requirements)
    - [2. Clone the repository](#2-clone-the-repository)
    - [3. Install dependencies](#3-install-dependencies)
    - [4. Run the site locally](#4-run-the-site-locally)
  - [Online deployment](#online-deployment)
- [🗂️ General overview of the project](#️-general-overview-of-the-project)
  - [\_config.yml](#_configyml)
  - [\_includes/ & \_layouts/](#_includes--_layouts)
  - [\_pages/](#_pages)
  - [\_sass/](#_sass)
  - [assets/](#assets)
  - [\_data/](#_data)
  - [Collections (\_news/, \_teams/, \_pics/, etc.)](#collections-_news-_teams-_pics-etc)
  - [\_site/](#_site)
  - [Multi-lingual support through Polyglot](#multi-lingual-support-through-polyglot)
- [📝 Updating and maintaining each of the elements of the site](#-updating-and-mantaining-each-of-the-elements-of-the-site)
  - [👤 Head](#-head)
  - [🦱 Header](#-header)
  - [🦶 Footer](#-footer)
  - [🏠 Home](#-home)
  - [📢 News](#-news)
  - [👥 Team](#-team)
  - [🧑‍🔬 Research](#-research)
  - [📚 Publications](#-publications)
  - [🧑‍🏫 Teaching](#-teaching)
  - [📸 Pics](#-pics)
  - [📬 Contact](#-contact)
  - [🤝 Join Us](#-join-us)
  - [⚙️ Site Info](#️-site-info)
- [💡 Best practices & Tips](#-best-practices--tips)
  - [Code formatting](#code-formatting)
  - [Online updating of website elements](#online-updating-of-website-elements)

# 🧩 Setup

## Setting and serving the site locally

### 1. Requirements:

- [Jekyll](https://jekyllrb.com)
  - [Installation Guide](https://jekyllrb.com/docs/installation/) (don't forget to check the requirements section, particularly [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/))
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

## \_config.yml

The `_config.yml` file is one of the most important components of any Jekyll project as it defines the site's configuration settings. It contains the main configuration settings for the Jekyll site including:

- Site title
- Logo display
- URL
- Theme, layout and feel of the site
- Language settings
- Plugin configurations
- More

The file is organized in such a way in which the most relevant and most likely to edit variables are first, and it is thoroughly commented explaining what each variable does and calls.

## \_includes/ & \_layouts/

The `_includes/` folder contains reusable components (like headers, footers, and navigation bars) that can be included in multiple pages. The `_layouts/` folder contains the overall structure of different types of pages (like default layout, post layout, etc.).

These files are written in Liquid templating language and HTML, allowing for dynamic content generation and consistent design across the site.

## \_pages/

All page source files are located inside the `_pages/` directory, organized into language-specific folders:

```{bash}
_pages/
├── en-gb/
├── es-es/
└── page_template.md
```

Each page is written in Markdown with its corresponding front matter which is thoroughly commented on what each variable is and does. Each page may call Liquid files from the `_layouts` and/or `_includes` folders (which also are properly commented on how they work). These files will render the main pages of the website, such as Home, About, Research, Publications, etc.

The `page_template.md` file serves as a template for creating new pages in different languages. It contains the basic structure and front matter that can be copied and modified for new pages.

## \_sass/

The `_sass/` folder contains the SASS files used for styling the website. These files are compiled into CSS.

The most relevant files are:

- `_base.scss` — Contains the base styles for the website, including typography, colors, and layout.
- `_variable.scss` — Contains the SASS variables used throughout the website, such as color palettes and font sizes.
- `_themes.scss` — Contains the styles for different themes or variations of the website.

## assets/

The `assets/` folder contains static files like images, JavaScript files, and CSS files used throughout the website.

Perhaps the most relevant subfolder is `assets/img/`, which contains all images used in the site, organized into subfolders.

## \_data/

The `_data/` folder contains YAML files that store structured data used in the site. These files can be called by the Liquid files from the `_layouts` and/or `_includes` folders used in the `_pages/` files to dynamically render specific sections of the website.

## Collections (\_news/, \_teams/, \_pics/, etc.)

Collections are custom content types in Jekyll. Each collection has its own folder (e.g. `_team/`, `_news/`, `_research/`, etc.) that contains Markdown files with front matters that, like the YAML items in the `_data/` folder, can be called by the Liquid files from the `_layouts` and/or `_includes` folders used in the `_pages/` files to dynamically render specific sections of the website, such as news articles, team member profiles, and photo galleries.

> [!IMPORTANT]
> Collections are defined in the `_config.yml` file under the `collections` key.
> When creating or editing collection items, make sure to follow the existing structure and conventions used in the site. This includes using the correct front matter fields and adhering to the naming conventions for files and folders.

> [!TIP]
> Each collection folder contains a template Markdown file (e.g. `member_template.md`, `announcement_template.md`, etc.) that serves as a guide for creating new items in the respective collection. These template files contain the necessary front matter fields and structure that should be followed when adding new items to the collection, and are thoroughly commented to provide guidance.

## \_site/

The `_site/` folder is the output directory where the generated static site is stored after building the Jekyll site. This folder is automatically created by Jekyll during the build process and should not be modified manually. It contains the final HTML, CSS, JavaScript, and other assets that make up the website.

> [!NOTE]
> This folder is generated automatically when you build or serve the Jekyll site using commands like `jekyll build` or `jekyll serve`.

> [!TIP]
> The `_site/` folder is included in the `.gitignore` file to prevent it from being tracked by version control, as it is generated automatically and can be recreated at any time by building the site.

## Multi-lingual support through Polyglot

This website uses the [Polyglot Jekyll Plugin](https://github.com/untra/polyglot) to provide multi-lingual support. The plugin allows you to create content in multiple languages and switch between them seamlessly. Each page has a language-specific version, and the plugin handles the routing and rendering of the appropriate content based on the selected language.

### Configuration and Structure

- **Configuration:** The `_config.yml` file contains a section for Polyglot Support with settings for the available languages and their configuration.
- **Content Organization:** Language-specific content is organized in separate folders within the `_pages/` directory and each of the collections (e.g., `_team/`, `_news/`, `_research/`, etc.), such as `en-gb/` for English and `es-es/` for Spanish. Each folder contains the corresponding Markdown files for that language.
- **Translation Requirements:** Every page and collection item should have a language-specific version with the same structure and front matter fields, but with content translated into the respective language. Each item (file) should be saved in both language folders.
  > **Note:** If an item is only saved in one language folder, it will be displayed on the website in that same language for all language versions. If this behavior is desired (e.g., for language-agnostic content), the item can be located inside the collection folder but outside the language-specific subfolders.
- **Multilingual Strings:** The `_data/[lang]/strings.yml` files contain the multilingual strings used throughout the site. These files are structured to provide translations for various text elements, ensuring consistency across different languages. The strings are accessed using Liquid templating in the layouts and includes.
- **Language Switcher:** The language switcher is implemented in the header of the site, allowing users to easily switch between available languages.

# 📝 Updating and mantaining each of the elements of the site.

This section provides simple guidelines on how to update and manage each section of the BCEM website.

## 👤 Head

The head section contains meta information about the site, such as the title, description, and keywords. It is defined in the `_includes/head.liquid` file and is included in the main layout files.

## 🦱 Header

The header section contains the site logo, navigation menu, and language switcher. It is defined in the `_includes/header.liquid` file and is included in the main layout files.

## 🦶 Footer

The footer section contains copyright information, links to privacy policies, and other relevant links. It is defined in the `_includes/footer.liquid` file and is included in the main layout files.

## 🏠 Home

The homepage of the BCEM website, providing an overview of the group, its mission, and key information. Defines the homepage content, including banners, recruitment callouts, and links to recent news.

- **Main file:** `_pages/about.md` — The frontmatter at the top of this file contains various configuration options for the homepage, such as banners, recruitment callouts, language switch messages, homeslides, and content modules (social media links, news, selected papers, affiliations, and collaborators). Additionally, the Markdown body contains the main text content of the homepage.
- **Supporting files:**
  - `_layouts/about.liquid` — This layout file provides the overall structure for the Home page. It defines how different sections (banners, callouts, news, etc.) are arranged on the page.
  - `_includes/figure.liquid` — This include file contains reusable components for displaying figures and images. In the homepage, it is used to display the main and secondary banners defined in the frontmatter of `about.md`.
  - `_includes/carousel.liquid` — This include file contains reusable components for displaying a carousel of images or content. In the homepage, it is used to display the homeslides defined in the frontmatter of `about.md`.
  - `_includes/social.liquid` — This include file contains reusable components for displaying social media links and icons. In the homepage, it is used to display the social media links defined in the _Social Integration_ section of the `_config.yml` file.
  - `_includes/news.liquid` — This include file contains reusable components for displaying news articles and updates. The items displayed are located in the `_news/` collection.
  - `_includes/selected_papers.liquid` — This include file contains reusable components for displaying selected papers or publications.
  - `_data/strings.yml` — Contains multilingual strings used throughout the site. All the strings related to the homepage are defined under the `about` key.
- **Data:** The homepage uses data from various sources to populate its content dynamically:
  - `_data/affiliations_and_sponsors.yml` — Contains the data for displaying the logos of our institutional affiliations and sponsors, and links to their websites.
  - `_data/collaborators.yml` — Contains the data for displaying the logos of our collaborators and links to their websites.
  - **Images:** All images used on the homepage should be placed in the `assets/img/` directory:
    - `banners/` — Contains banner images used on the homepage.
    - `homeslides/` — Contains images used in the homepage slideshow.
      > **Tip:** The aspect ratio of the profile pictures is 1205 / 790, so to avoid unwanted distortion of these pictures when displayed in the website, is best if the images already have the desired aspect ratio. There are several free online tools and desktop applications (e.g. GIMP, Photoshop, Inkscape) to tweak and/or modify images to achieve this.
    - `affilpics/` — Contains images of institutional affiliations.
    - `collapics/` — Contains images of collaborators and sponsors.

## 📢 News

The news section showcases the latest updates, announcements, and articles related to the BCEM group. It provides a dynamic way to keep visitors informed about recent activities and developments.

- **Main file:** `_pages/news.md` — The frontmatter at the top of this file contains various configuration options for the news page, such as pagination settings. Additionally, the Markdown body contains the main text content of the news page.
- **Supporting files:**
  - `_layouts/post.liquid` — This layout file provides the overall structure for the News page. It defines how different sections (news articles, pagination, etc.) are arranged on the page.
  - `_includes/news.liquid` — This include file contains reusable components for displaying individual news articles. It is used in the news page to display the articles defined in the `_news/` collection.
- **Data:** The news page uses data from various sources to populate its content dynamically:
  - `_data/strings.yml` — Contains multilingual strings used throughout the site. All the strings related to the news page are defined under the `news` key.
  - `_news/` — Contains the markdown files for each news article, each with its own YAML front matter and content.
  - **Images:** All images used on the news page should be placed in the `assets/img/` directory:
    - `_news/` — Contains images related to news articles.

## 👥 Team

The team section showcases the members of the BCEM group, their roles, and relevant information. It is structured to highlight individual profiles and contributions.

- **Main file:** `_pages/team.md` — The frontmatter at the top of this file contains various configuration options for the team page, such as team member categories and display settings. Additionally, the Markdown body contains the main text content of the team page.
- **Supporting files:**
  - `_layouts/team_member.liquid` — This layout file provides the overall structure for the personal page of each team member.
  - `_includes/team_member.liquid` — This include file contains reusable components for displaying individual team member profiles. It is used in the team page to display the profiles defined in the `_team/` collection.
  - `_includes/former_team_member.liquid` — This include file contains reusable components for displaying former team member profiles. It is used in the team page to display the profiles defined in the `_team/` collection with the `ended` variable from the front matter not empty.
- **Data:** The team page uses data from various sources to populate its content dynamically:
  - `_team/` — Contains the markdown files for each team member, each with its own YAML front matter which contains various configuration options for the team page, such as team member details, social media links, and profile pictures. Additionally, the Markdown body contains the main text content of the team member's personal page.
  - **Images:** All images used on the team page should be placed in the `assets/img/` directory:
    - `teampic/` — Contains profile pictures of team members.
      > **Tip:** The aspect ratio of the profile pictures is 1:1 (squared), so to avoid unwanted distortion of these pictures when displayed in the website, is best if the images already have the desired aspect ratio. There are several free online tools and desktop applications (e.g. GIMP, Photoshop, Inkscape) to tweak and/or modify images to achieve this.

## 🧑‍🔬 Research

The research section highlights the key research areas and projects undertaken by the BCEM group. It provides an overview of ongoing work, collaborations, and contributions to the field.

- **Main file:** `_pages/research.md` — The frontmatter at the top of this file contains various configuration options for the research page, such as pagination settings. Additionally, the Markdown body contains the main text content of the research page.
- **Supporting files:**
  - `_includes/project_description.liquid` — This include file contains reusable components for displaying individual research project descriptions. It is used in the research page to display the projects defined in the frontmatter of `research.md`.
- **Data:** The research page uses data from various sources to populate its content dynamically:
  - `_research/` — Contains the markdown files for each research project, each with its own YAML front matter and content. The frontmatter at the top of these files contains various configuration options for the research topic, such as project details, a reference image, and the links to relevant highlighted publications. Additionally, the Markdown body contains the main text content of the research page.
  - **Images:** All images used on the research page should be placed in the `assets/img/` directory:
    - `research/` — Contains images related to research projects.

## 📚 Publications

The publications section showcases the research outputs of the BCEM group, including journal articles, conference papers, and other scholarly works. It provides a comprehensive overview of our contributions to the field.

- **Main file:** `_pages/publications.md`
- **Supporting files:**
  - `_includes/bib.liquid` — This include file contains reusable components for displaying individual publication entries. It is used in the publications page to display the publications defined in the frontmatter of `publications.md`.
- **Data:** The publications page uses data from various sources to populate its content dynamically:
  - `_bibliography/bcem.bib` — Contains the BibTeX entries for all publications of the group. This file should be kept up to date with all publications from the group.
    > **TIP:** You can use reference management software like [Zotero](https://www.zotero.org/) or [Mendeley](https://www.mendeley.com/) to manage your references and export them in BibTeX format. You can simply import the existing `_bibliography/bcem.bib` file into your reference manager, add new publications, and then export the updated BibTeX file to replace the existing one.
  - `_bibliography/team_member.bib` — Contains the BibTeX entries for all publications of the team member to be displayed on their personal page.

## 🧑‍🏫 Teaching

The teaching section highlights the educational resources and contributions of the BCEM group. It provides an overview of courses offered, teaching materials, and other educational initiatives.

- **Main file:** `_pages/teaching.md` — The frontmatter at the top of this file contains various configuration options for the teaching page, such as pagination settings. Additionally, the Markdown body contains the main text content of the teaching page.
- **Supporting files:**
  - `_includes/teaching.liquid` — This include file contains reusable components for displaying individual course descriptions. It is used in the teaching page to display the courses defined in the frontmatter of `teaching.md`.
- **Data:** The teaching page uses data from various sources to populate its content dynamically:
  - `_teaching/` — Contains the data for displaying the details of our courses, including titles, descriptions, instructors, and links to materials.
  - **Images:** All images used on the teaching page should be placed in the `assets/img/` directory:
    - `teaching/` — Contains images related to teaching materials.

## 📸 Pics

The pics section showcases images related to the BCEM group's activities, events, and initiatives. It provides a visual overview of our work and community engagement.

- **Main file:** `_pages/pics.md` — The frontmatter at the top of this file contains various configuration options for the pics page, such as pagination settings. Additionally, the Markdown body contains the main text content of the pics page.
- **Supporting files:**
  - `_includes/carousel.liquid` — This include file contains reusable components for displaying a carousel of images or content. In the pics page, it is used to display the images and years of the generations defined in the frontmatter of `pics.md`.
  - `_includes/gallery.liquid` — This include file contains reusable components for displaying image galleries. It is used in the pics page to display the galleries defined in the frontmatter of the files in the `_pics/` collection of the activities outside the lab that the BCEM group has carried out.
- **Data:** The pics page uses data from various sources to populate its content dynamically:
  - `_data/pictures_gens.yml` — Contains the data for displaying the images of the generations of the BCEM group.
  - `_pics/` — Contains the images related to the BCEM group's activities.
  - **Images:** All images used on the pics page should be placed in the `assets/img/` directory:
    - `picpic/gens` — Contains the images of the generations of the BCEM group.
      > **Tip:** The aspect ratio of the profile pictures is 1205 / 790, so to avoid unwanted distortion of these pictures when displayed in the website, is best if the images already have the desired aspect ratio. There are several free online tools and desktop applications (e.g. GIMP, Photoshop, Inkscape) to tweak and/or modify images to achieve this.
    - `picpic/gallery` — Contains images related to the BCEM group's activities.

## 📬 Contact

The contact section provides information on how to get in touch with the BCEM group including contact and location details, as well as an embedded map for location reference.

- **Main file:** `_pages/contact.md` — The frontmatter at the top of this file contains various configuration options for the contact page, such as contact and location details. Additionally, the Markdown body contains the main text content of the contact page.
- **Supporting files:**
  - `_includes/contact.liquid` — This include file contains reusable components for displaying the contact form. It is used in the contact page to display the form defined in the frontmatter of `contact.md`.

## 🤝 Join Us

The join section provides information on open opportunities for joining the group, as well as information on how to get into touch with the BCEM group to join.

- **Main file:** `_pages/join.md` — The frontmatter at the top of this file contains various configuration options for the join page such as pagination settings, and information on open opportunities for joining the group, as well as information on how to get into touch with the BCEM group to join.
- **Supporting files:**
  - `_includes/join_us.liquid` — This include file contains reusable components for displaying the join form. It is used in the join page to display the form defined in the frontmatter of `join.md`.
- **Data:** The join page uses data from various sources to populate its content dynamically:
  - `_news/` — Details of open positions are added as news articles in the `_news/` collection.

## ⚙️ Site Info

The site info section provides details about the BCEM group's website, including its purpose, structure, and relevant links.

- **Main file:** `_pages/site_info.md`

# 💡 Best practices & Tips

## Code formatting

To maintain consistent code formatting across the project, you can use Prettier. Run the following command inside the projects directory to format all files:

```bash
npx prettier . --write
```

## Online updating of website elements

Since the website is already deployed via GitHub Pages, updating simple aspects of the website can be achieved directly through the GitHub web interface without needing to clone the repository or set up a local development environment.

### What can be updated online:

- **Text content:** Edit Markdown files in `_pages/`, `_news/`, `_team/`, `_research/`, etc.
- **Images:** Upload new images to the `assets/img/` directory and its subfolders
- **Links and metadata:** Modify YAML front matter in page and collection files
- **Data files:** Update YAML files in the `_data/` directory (e.g., affiliations, collaborators, strings)
- **Collection items:** Add, edit, or remove items from collections like news articles, team members, or research projects

### How to update online:

1. Navigate to the file you want to edit on GitHub
2. Click the pencil icon (✏️) to edit the file
3. Make your changes in the editor
4. Scroll down and add a descriptive commit message
5. Click "Commit changes"
6. The GitHub Actions workflow will automatically rebuild and redeploy the site (usually takes 2-5 minutes)

> **Important:** For more complex changes involving layouts, styles, or structural modifications, it's recommended to work locally and test the changes before pushing to the repository.

> **Tip:** You can check the deployment status by visiting the "Actions" tab in the GitHub repository to ensure your changes were successfully deployed.
