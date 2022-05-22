//creating obj using constructor function
function student(n, c, u, i, b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FW${b}`;
}

function storeData(event) {
    event.preventDefault();

    let form = document.querySelector("#form");

    let name = form.name.value;

    let course = form.course.value;

    let unit = form.unit.value;

    let image = form.image.value;

    let batch = form.batch.value;
    // console.log(name,course,unit,image,batch);

    let user1 = new student(name, course, unit, image, batch);


    //after clicking on submit, data should be store in localstorage.
    let studentdata = JSON.parse(localStorage.getItem("students")) || [];

    studentdata.push(user1);

    localStorage.setItem("students", JSON.stringify(studentdata));

    console.log(user1);

}

//calculate the no of student in batch to display in navbar

function calculate() {
    let studentdata = JSON.parse(localStorage.getItem("students")) || [];   //get data from localstorage
    // console.log(database);

    let obj = {};      //creating obj to find occurance
    for (let i = 0; i < studentdata.length; i++) {
        if (obj[studentdata[i].batch] === undefined) {
            obj[studentdata[i].batch] = 1;
        }
        else {
            obj[studentdata[i].batch]++;
        }
    }
    // console.log(obj);
    let x = document.querySelector("#navbar")

    for (let key in obj) {
        x.append(`${key}-${obj[key]} | `)
    }
}
calculate();