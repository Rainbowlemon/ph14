# ph14
A super-basic, drop-in CSS framework using minimal classes. These styles are intended to be used for projects that haven't yet had any design input, to prettify your HTML without having to go through it and add a bunch of classes and wrapper divs. By all means, feel free to use it for your final CSS if you like the style - but it is intended as a stop-gap rather than a final solution.

## Usage
Drop `ph14.min.css` into your page's `<head>`, and away you go!

### Classes
There are a few small helper classes just in case you need to move a few things around on your page:

- `.ph14-section` - Creates a section with large bottom margin (2.5rem)
- `.ph14-spacer` - Adds a small bottom margin (1rem) to the element
- `.ph14-wrap` - Restricts this element's width to 40rem maximum, and adds a small amount of padding

### Roles
Semantic HTML5 includes ['ARIA roles'](https://www.w3.org/TR/html-aria/) which tell screen readers what the HTML element does. This CSS framework uses those roles for some basic style enhancements, as follows:

- `role="main"` - The main content of your document, ideally on a `<main>` tag. Adds top and bottom padding to give breathing space to the content and make it easier to read.
- `header[role="banner"]` - Adding a header tag with `role="banner"` will add a large banner hero. This works best as the top of the page, outside of your `<main>` tag.
- `role="note"` - Adds a 'quote' style to the element.
- `role="button"` - Adds a button style.
