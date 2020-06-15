var database, form;

function setup() {
    createCanvas(displayWidth - 40, displayHeight  - 200)
    database = firebase.database();
    form = new Form;
}

function draw() {
    form.display();
}