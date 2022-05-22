let studentdata = JSON.parse(localStorage.getItem("students")) || [];   //get data from localstorage

displayData(studentdata);

function displayData(studentdata) {
    studentdata.forEach(function (el, index) {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let photo = document.createElement("img");
        photo.src = el.image;
        td1.append(photo);

        let td2 = document.createElement("td");
        td2.innerText = el.name;

        let td3 = document.createElement("td");
        td3.innerText = el.course;

        let td4 = document.createElement("td");
        td4.innerText = el.batch;

        let td5 = document.createElement("td");
        td5.innerText = el.unit;

        let td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.style.color = "red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function () {

            deletes (el, index);
        });

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });
}
function deletes (el, index) {
    studentdata.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(studentdata));

    window.location.reload();
}