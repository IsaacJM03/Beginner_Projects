const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer'),
        ]
    })
    .sourceMaps();
mix.js('resources/js/canvas-ui/app.js', 'public/js/canvas-ui.js').vue()
    .sass('resources/sass/canvas-ui.scss', 'public/css/canvas-ui.css');
