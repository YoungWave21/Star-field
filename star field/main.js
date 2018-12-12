var cnv = document.getElementById("mycanvas");
var ctx = cnv.getContext("2d")
cnv.width = 650;
cnv.height = 650;
var numberStar = 300;
var size = 1;
var stars = [];
var fl = cnv.width;
var centreX = cnv.height / 2;
var centreY = cnv.height / 2;
var speed = 10;


for (var i = 0; i < numberStar; i++) {
    stars[i] = new Star();
}


function Star() {
    this.x = Math.random() * cnv.width;
    this.y = Math.random() * cnv.height;
    this.z = Math.random() * cnv.width;

    this.move = function () {
        this.z = this.z - speed;
        if (this.z <= 0) {
            this.z = cnv.width;
        }
    }

    this.show = function () {
        var x, y, s;
        x = (this.x - centreX) * (fl / this.z);
        x = x + centreX;

        y = (this.y - centreY) * (fl / this.z);
        y = y + centreY;

        s = size * (fl / this.z);


        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
    }
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    for (var i = 0; i < numberStar; i++) {
        stars[i].show();
        stars[i].move();
    }

}

function update() {
    draw();
    window.requestAnimationFrame(update);
}
update();