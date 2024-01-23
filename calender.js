const header = document.querySelector('.calender h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev,#next');
const calenderContainer = document.querySelector('body');

const months =[
    'January',
    'Febrauary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const monthImages =[
    "./monthlyImages./jan.jpg",
    "./monthlyImages./feb.jpg",
    "./monthlyImages./march.jpg",
    "./monthlyImages./april.jpg",
    "./monthlyImages./may.jpg",
    "./monthlyImages./jun.jpg",
    "./monthlyImages./july.jpg",
    "./monthlyImages./aug.jpg",
    "./monthlyImages./sept.jpg",
    "./monthlyImages./oct.jpg",
    "./monthlyImages./nov.jpg",
    "./monthlyImages./dec.jpg",
]

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalender(){
    const start = new Date(year,month,1).getDay();
    const endDate = new Date(year,month+1,0).getDate();
    const end = new Date(year,month,endDate).getDay();
    const endDatePrev = new Date(year,month,0).getDate();
    
    let datesHtml = "";
    
    for (let i = start; i > 0; i--) {
        datesHtml +=`<li class="inactive">${endDatePrev - i + 1}</li>`;
    }
   
    for(let i =1; i <= endDate ;i++){
        let className =
        i === date.getDate() && 
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
        ? ' class="today" ' : "" ;

        datesHtml +=`<li${className}>${i}</li>`;
    }

    for(let i = end ;i<6;i++){
        datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }
    
    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}` ;
    
    
    const currentMonthImage = monthImages[month];
    calenderContainer.style.backgroundImage = `url(${currentMonthImage})`;
    
}

navs.forEach((nav) => {
    nav.addEventListener('click',(e) => {
        const btnId = e.target.id ;

        if(btnId === "prev" && month === 0){
            year--;
            month = 11;
        }else if(btnId === "next" && month === 11){
            year++;
            month = 0;
        }else{
            month = btnId === "next" ? month + 1 : month - 1;

        }

        date = new Date(year,month,new Date().getDate());
        year = date.getFullYear();
        month = date.getMonth();

        renderCalender();
    });
});

renderCalender();