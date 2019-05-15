 // find all imagems
 
 $('img').each((index,item)=>{console.log(item.src)})
 
 // iterare all objects find images in bg
$('*').toArray().map((item)=> { return item.style.backgroundImage ||item.style.background.indexOf('url') != -1; }).filter((img)=> {return img}).forEach((img)=>{ console.log(img)})

Array.from($('*')).map((item)=> { return item.style.backgroundImage ||item.style.background.indexOf('url') != -1; }).filter((img)=> {return img}).forEach((img)=>{ console.log(img)})
