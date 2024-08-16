const Diff = require('diff')

export default async function CompareTexts(text1: string, text2: string) {
    const diff = Diff.diffChars(text1, text2);
    let span = null;
    const fragment = document.createDocumentFragment();
    diff.forEach((part) => {
        // green for additions, red for deletions
        // grey for common parts
        const color = part.added ? 'green' :
            part.removed ? 'red' : 'grey';
        span = document.createElement('span');
        span.style.color = color;
        span.appendChild(document
            .createTextNode(part.value));
        fragment.appendChild(span);
    });
    return fragment;
}