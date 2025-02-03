import Split from 'split-grid'

Split({
    columnGutters: [{
        track: 1,
        element: document.querySelector('.gutter-col-1'),
    }],
    rowGutters: [{
        track: 1,
        element: document.querySelector('.gutter-row-1'),
    }]
})