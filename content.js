// Pfad des neuen Logos
const newLogo = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204">
  <path fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
</svg>`;

$(document).ready(function() {
  // Wenn das DOM geladen ist, führen wir unseren Code aus
  replaceLogos();
  replaceTitles();
});

function replaceLogos() {
  // jQuery vereinfacht die DOM-Manipulation erheblich
  $('svg').each(function() {
    const path = $(this).find('path');
    if (path.attr('d').startsWith('M18.244 2.25h3.308l-7.227 8.26')) {
      $(this).replaceWith(newLogo);
    }
  });
}

function replaceTitles() {
  // Finden und ersetzen von <meta> und <title> Tags
  $('meta[property="og:title"]').each(function() {
    var content = $(this).attr('content');
    if (content.endsWith(' / X')) {
      $(this).attr('content', content.replace(' / X', ''));
    }
  });
  $('title').each(function() {
    var title = $(this).text();
    if (title.endsWith(' / X')) {
      $(this).text(title.replace(' / X', ''));
    }
  });
}

// Wir setzen einen MutationObserver ein, um Änderungen im DOM zu überwachen und unsere Funktionen erneut auszuführen
const observer = new MutationObserver(function() {
  replaceLogos();
  replaceTitles();
});
observer.observe(document, {childList: true, subtree: true});
