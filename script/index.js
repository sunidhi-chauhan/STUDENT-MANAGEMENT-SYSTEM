function Student(n, c, u, i, b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FT-Web${b}`;
}

function storeData(e) {
    e.preventDefault();
    let form = document.getElementById("students_data");
    let name = form.name.value;
    let course = form.cource.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(name, course, unit, image, batch)
    let data = JSON.parse(localStorage.getItem("students")) || [];
    data.push(s1);
    localStorage.setItem("students", JSON.stringify(data))
    console.log(s1);

    // console.log(name, course, unit, image, batch)


}