// let getAll = document.body.getElementsByTagName;

let ptags = document.body.getElementsByTagName("p");
// let strongTags = document.body.getElementsByTagName("strong");
// let liTags = document.body.getElementsByTagName("li");

// console.log(strongTags);
// console.log(liTags);

let getFontSize = (tag) => {
    let fontSize = window
        .getComputedStyle(tag, null)
        .getPropertyValue("font-size");
    return fontSize.slice(0, fontSize.length - 2);
};

const makeBionic = (tags) => {
    for (let i = 0; i < tags.length; i++) {
        let tag = ptags[i];
        let fontSize = getFontSize(tag);
        let sentence = tag.innerHTML;
        let words = sentence.split(" ");
        let newSentence = "";
        for (let j = 0; j < words.length; j++) {
            let word = words[j];
            let bl = Math.ceil(word.length / 4);
            word =
                `<b style = "font-size : ${parseFloat(fontSize) + 2}px">` +
                word.slice(0, bl) +
                "</b>" +
                word.slice(bl);
            newSentence += (j === 0 ? "" : " ") + word;
        }
        tag.innerHTML = newSentence;
    }
};

makeBionic(ptags);
// makeBionic(strongTags);
// makeBionic(liTags);
