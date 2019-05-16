 // find all imagems
 $('img').each((index, item) => {
     console.log(item.src)
 })

Array.from(document.body.getElementsByTagName("img")).map((img)=> img.src)

 // iterare all objects find images in bg

 //newers Jquery
 $('*').toArray().map((item) => {
     return item.style.backgroundImage || item.style.background.indexOf('url') != -1;
 }).filter((img) => {
     return img
 }).forEach((img) => {
     console.log(img)
 })
 //olds jquery
 Array.from($('*')).map((item) => {
     return item.style.backgroundImage || item.style.background.indexOf('url') != -1;
 }).filter((img) => {
     return img
 }).forEach((img) => {
     console.log(img)
 })

 //Vanilla JS
 document.body.getElementsByTagName("*").map((item) => {
     return item.style.backgroundImage || item.style.background.indexOf('url') != -1;
 }).filter((img) => {
     return img
 }).forEach((img) => {
     console.log(img)
 })
