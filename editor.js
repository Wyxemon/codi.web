require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    window.htmlEditor = monaco.editor.create(document.getElementById('html'), {
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 16,
        // lineNumbers: 'off',
        value: '<!-- Escribe tu HTML aquí -->',
    });

    window.cssEditor = monaco.editor.create(document.getElementById('css'), {
        language: 'css',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 16,
        // lineNumbers: 'off',
        value: '/* Escribe tu CSS aquí */',
    });

    window.jsEditor = monaco.editor.create(document.getElementById('js'), {
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 16,
        // lineNumbers: 'off',
        value: '// Escribe tu JavaScript aquí',
    });

    htmlEditor.onDidChangeModelContent(renderWeb);
    cssEditor.onDidChangeModelContent(renderWeb);
    jsEditor.onDidChangeModelContent(renderWeb);
});