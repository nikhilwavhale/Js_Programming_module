
//document.getElementsByTag
const images=document.getElementsByTagName('img')
// const images1=document.images
// const subheadings=document.getElementsByTagName('h2')
// subheadings[0].innerText='Itview Solution Pune'
// subheadings[1].innerHTML='<i>FrontEnd Development Using React</i>'
// images[0].src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='


//document.getElementByClass
const subheadings1=document.getElementsByClassName('subheadings')
subheadings1[0].innerHTML='Hello Programmer'

//document.getElementById
const cssimg=document.getElementById('img2')
//document.getElementById('img1').src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='

//document.querySelector()
const para=document.querySelector('.paragraphs')
const paras=document.querySelectorAll('.paragraphs')
const images2=document.querySelectorAll('.imagesclass')

const imageurl=[
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_960_720.jpg',
    'https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo='
]
// images2[0].src=imageurl[0]
// images2[1].src=imageurl[1]
// images2[2].src=imageurl[2]

// for(let i=0;i<images2.length;i++)
// {
//     images2[i].src=imageurl[i]
// }

document.querySelectorAll('.imagesclass').forEach((ele,index)=>{
    ele.src=imageurl[index]
})
