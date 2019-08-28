//1.1 Open the apps.js and start by declaring an array that contains 10 strings.
let myArr = [
    'Moby_Dick',
    'Grace_Of_Giving',
    'Goals',
    'The_Tears_Of_My_Soul',
    'Me_Before_You',
    'Kiss_That_Frog',
    'Building_Your_Network_Marketing_Business',
    'Rich_Dad_Poor_Dad',
    'The_21_Absolutely_Unbreakable_Laws_Of_Money',
    'Eat_That_Frog'
];

function myFavoriteBooks(myArr) {
    let i = 0;
    let ul = document.createElement('ul');
    document.getElementById('BooksList').appendChild(ul);

    for (i = 0; i < myArr.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += myArr[i];
        //1.3 Remove the temporary console.log from step 1.1. 
        // console.log(i + ". " + element);
    }
}//end
myFavoriteBooks(myArr);

//1.4 Make an object (not an array!) containing information for each book. 
function Book(title, language, author)
{
    this.title = title;
    this.language = language;
    this.author = author;
}


let book1 = new Book(myArr[0],'lang1','auth1');

let b1 = document.createElement('div');

b1.setAttribute('id',myArr[0]);

document.body.appendChild(b1);

b1.innerHTML = book1.title.replace('_',' ');