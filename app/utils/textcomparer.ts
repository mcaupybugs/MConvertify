var Diff = require('text-diff');
var diff = new Diff({timeout: 0, }); 

export default async function CompareTexts(text1: string, text2: string){
    var textDiff = diff.main(text1, text2);
    const value =  diff.prettyHtml(textDiff);
    console.log(value);
    console.log(diff);
    return value;
}