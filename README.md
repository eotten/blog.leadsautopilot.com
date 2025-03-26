# LeadsAutopilot Blog

This is a static Jekyll site for the LeadsAutopilot Blog: B2B Client Acquisition Hub. The site features a clean, light design with blue as the primary color and uses the Inter font family. It's built with Jekyll and Tailwind CSS.

## Features

- Responsive design optimized for all devices
- Clean, modern UI with blue accent color
- Article cards with featured images
- Category and tag organization for content
- SEO optimized with meta tags
- Mobile-friendly navigation

## Prerequisites

To run this site locally, you'll need:

- [Ruby](https://www.ruby-lang.org/en/downloads/) (version 2.5.0 or higher)
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)

## Installation

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/blog.leadsautopilot.com.git
   cd blog.leadsautopilot.com
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the local server:
   ```
   bundle exec jekyll serve
   ```

5. Open your browser and navigate to http://localhost:4000

## Directory Structure

```
blog.leadsautopilot.com/
├── _includes/         # Reusable components
├── _layouts/          # Page templates
├── _posts/            # Blog posts
├── _sass/             # SCSS styling
├── assets/            # Static files
│   ├── css/           # Compiled CSS
│   ├── js/            # JavaScript files
│   └── images/        # Images
├── _config.yml        # Jekyll configuration
└── index.html         # Homepage
```

## Creating Content

### Blog Posts

Create a new file in the `_posts` directory with the naming convention `YYYY-MM-DD-title.md`. Include the following front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
author: "Author Name"
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: /assets/images/posts/your-image.jpg
excerpt: "A brief excerpt of your post that will appear on the homepage."
---

Your content here...
```

## Customization

- **Colors**: Edit the CSS variables in `_includes/head-custom.html`
- **Layout**: Modify the templates in the `_layouts` directory
- **Styling**: Update the CSS in `assets/css/main.css`

## Deployment

This site can be deployed to any static site hosting service like GitHub Pages, Netlify, or Vercel.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

LeadsAutopilot Team - [contact@leadsautopilot.com](mailto:contact@leadsautopilot.com)

Project Link: [https://github.com/yourusername/blog.leadsautopilot.com](https://github.com/yourusername/blog.leadsautopilot.com) 