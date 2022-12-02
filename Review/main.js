const reviews = [
    {
        id: 1,
        author: 'Susan Smith',
        job: 'Web Developer',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        author: 'Anna Johnson',
        job: 'Web Designer',
        img:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        author: 'Peter Jones',
        job: 'Intern',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        author: 'Sara Jones',
        job: 'UX Designer',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?'
    }
]
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const random = document.querySelector('.random-btn')
let currentItem = 0;
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});
function showPerson(person){
   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.author;
   job.textContent = item.job;
   info.textContent = item.text
};
function nextBtn(){
  currentItem++;
if(currentItem > reviews.length - 1){
    currentItem = 0;
}
showPerson(currentItem);
};
function prevBtn(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}
function randomBtn(){
    const randomBtn = Math.floor(Math.random() * reviews.length);
    return showPerson(randomBtn)
}
next.addEventListener('click', nextBtn);
prev.addEventListener('click', prevBtn);
random.addEventListener('click', randomBtn);