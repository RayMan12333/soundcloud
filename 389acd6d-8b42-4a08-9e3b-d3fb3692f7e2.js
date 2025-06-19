
  (function () {
    var theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-' + theme);
  })();
