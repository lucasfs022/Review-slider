const reviews = [
    {
        image: "./Resources/Images/profile-pic (2).png",
        name: 'Lucas Silva',
        profession: 'Frontend Developer',
        description: 'Dolor nihil ducimus doloribus perferendis officiis modi neque ' +
        'ad temporibus maiores culpa.'
    },
    {
        image: "./Resources/Images/artist-1.png",
        name: 'Susan Smith',
        profession: 'Ux Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + 
        'Dolor nihil ducimus doloribus perferendis officiis modi neque ' +
        'ad temporibus maiores culpa.'
    },
    {
        image: "./Resources/Images/artist-2.png",
        name: 'John Doe',
        profession: 'Photographer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + 
        'Dolor nihil ducimus doloribus perferendis officiis modi neque '
    },
    {
        image: "./Resources/Images/artist-3.png",
        name: 'Anna Johnson',
        profession: 'Web Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
];

// informações a serem alteradas no slider
const image = document.getElementById('image');
const author = document.getElementById('author');
const profession = document.getElementById('profession');
const description = document.getElementById('description');

// botões que acionarão events
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.random-btn');

// contador p/ o slider
let reviewIndex = 0;

// loga junto com o HTML a função newReview;
window.addEventListener('DOMContentLoaded', () => newReview());

// contem as infos nos novos reviews de acordo com o index apontado no "reviewIndex"
const newReview = () => {
    let infos = reviews[reviewIndex];
    image.src = infos.image;
    author.textContent = infos.name;
    profession.textContent = infos.profession;
    description.textContent = infos.description;
}

// CLICK EVENTS

//botão [>]
nextButton.addEventListener('click', () => {
    reviewIndex++;
    if(reviewIndex > reviews.length-1) {
        reviewIndex = 0;
    }

    newReview();    
})

//botão [<]
prevButton.addEventListener('click', () => {
    reviewIndex--;
    if(reviewIndex < 0) {
        reviewIndex =  reviews.length-1;
    }

    newReview();    
})

// Review aleatório

randomButton.addEventListener('click', () => {
    reviewIndex = Math.floor(Math.random() * reviews.length);
    newReview();
})