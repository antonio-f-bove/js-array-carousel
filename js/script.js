const titlesList = ['Title 1', 'Title 2 is longer'];
const pList =[
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto iusto eligendi vitae distinctio libero mollitia facilis eaque quasi, quo rem ab velit, consectetur molestiae nihil. Corporis nam sequi nesciunt?',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic magni, ex quaerat eos saepe quos facilis numquam laboriosam placeat impedit. Porro error, alias quasi incidunt architecto sunt voluptatum laborum!'
];

let index = 0;

const title = document.querySelector('.carousel-h1');
const p = document.querySelector('.carousel-p');

title.innerHTML = titlesList[index];
p.innerHTML = pList[index];

// next button
const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', function() {
  index++;
  if (index > titlesList.length - 1) {
    index = 0;
  }
  title.innerHTML = titlesList[index];
  p.innerHTML = pList[index];
});

// back button
const prevBtn = document.querySelector('.previous');
prevBtn.addEventListener('click', function() {
  index--;
  if (index < 0) {
    index = titlesList.length - 1;
  }
  title.innerHTML = titlesList[index];
  p.innerHTML = pList[index];
});