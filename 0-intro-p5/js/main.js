console.clear()

function preload() {

}

function setup() {
    // frameRate(2)
    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    strokeWeight(5)
}

function draw() {
    // console.log('Hello')
    background(244,244,244)
    fill(255,3,4)

    // stroke('skyblue')
    const mapX = map(mouseX, 0, width, 0, 500)
    const mapY = map(mouseY, 0, height, 0, 500)
    translate(width / 2, height/ 2)
    // rect(0,0,500,500)

    // push()
    //     fill(255,255,0)
    //     ellipse(0,0, 50)
    // pop()

    rect(0,0,mapX,mapY)
}