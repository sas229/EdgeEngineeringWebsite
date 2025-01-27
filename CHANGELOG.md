## Changelog

### Version 1.4 (Released Feb 18 2024)
* Maintence update
* Tested with latest version of Hugo
* Tested deploy with Netlify
* Updated docs

### Version 1.3 (Released March 20 2021)
* Fixed bug where google analytics ID was not being set correctly
* Improved Google Fonts support. Now supports font weights. Now uses the new snippet and `preconnect`. Google fonts load even faster (But control yourself, dont add to many! 👻 - Besides large images, Fonts are the biggest asset which will slow your site down)
* Added transparent header mode, but not enabled by default
* Improved example content in `/custom-page-1`
* Dark mode toggle is now inside the hamburger menu on mobile. Previously it was in the header on mobile and took up to much space. 
* Ability to disable the hamburger menu and mobile menu. You can disable this in `data/layout.yaml` > `header.disableHamburgerMenu: false`. This is for people who are builing 1 page sites. The hamburger menu and mobile menu are enabled by default.
* Ability to configure the header height if you are not happy with the auto sizing. You can set this in `data/layout.yaml` > `header.headerHeight: '60px'`.
* Social media icons now use font-awesome. Icons change color between light/dark mode.
* Added hugo archetypes for each content type
* Improved blog card layout
* Improved pagination on blog
* Added Forestry

### Version 1.2 (Released March 03, 2021)
- Update SEO meta tags. Improved the default meta tags and OG metadata. Meta tags now use the pages `.Title`, `.Params.description` and `.Params.image`. You can override the meta tags in any template using {{ define "meta_tags" }}{{ end }} and {{ define "title" }}{{ end }}. See the Blog layout for an example `layouts/posts/single.html`
- Dark mode now detects users OS system preference.
- Fix bug where if dark mode was disabled in `data/layout.yaml` the preference stored in sessionStorage was still used.

### Version 1.1 (Released September 13, 2020)

- Ability to disable dark mode toggle from `data/layout.yaml`
- Remove custom color overrides in favour of themed colors
- Dark Mode improvements
- Header bug fixes and refactor
- General cleanup of theme colors and themes.json
- Improve default card layouts, bug fixes
- Add more card configuration options in grid section
```
- template: grid
  contentType: features
  card:
    partial: card
    border: true
    padding: true
    shadow: true
    showThumbnail: true
    showThumbnailLink: true
    showFooter: true
    showTitle: true
    showTitleLink: true
    showDate: false
```

### Version 1.0 (Released August 02, 2020)

- Initial release.
