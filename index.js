const $ = (id) => document.getElementById(id);

const $html = $('html');
const $css = $('css');
const $js = $('js');
const $iframe = document.getElementById('iframe');

document.addEventListener('DOMContentLoaded', (event) => {
    $html.addEventListener('input', renderWeb)
});

document.addEventListener('DOMContentLoaded', (event) => {
    $css.addEventListener('input', renderWeb)
});

document.addEventListener('DOMContentLoaded', (event) => {
    $js.addEventListener('input', renderWeb)
});

function renderWeb() {
    const htmlContent = window.htmlEditor.getValue();
    const cssContent = window.cssEditor.getValue();
    const jsContent = window.jsEditor.getValue();

    $iframe.srcdoc = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <title>Web</title>
    <style>
    ${cssContent}
    </style>
    </head>
    <body>
    ${htmlContent}
    <script>
    ${jsContent}
    </script>
    </body>
    </html>
    `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    renderWeb();
});
