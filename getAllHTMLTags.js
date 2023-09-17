// Use on https://developer.mozilla.org/en-US/docs/Web/HTML/Element in chromes developer console.
let html_tags = []
document.querySelectorAll("#sidebar-quicklinks > nav > div > div.sidebar-body > ol > li:nth-child(8) > details > ol li a code").forEach((node)=>{
    let tag = node.innerText.replace("<","").replace(">","");
    html_tags.push(tag);
});
// console.log(html_tags);

let html_tag_string = "";

html_tags.forEach((tag, index, array)=>{
    html_tag_string += `'${tag}',`
}); // just delete the last comma yourself im too lazy to do that