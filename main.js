// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        console.log("p and shift key are pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("m and shift key are pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == "38") {
        up();
        console.log("up arrow key is pressed");
    }
    if (keypressed == "40") {
        down();
        console.log("down arrow key is pressed");
    }
    if (keypressed == "37") {
        left();
        console.log("left arrow key is pressed");
    }
    if (keypressed == "39") {
        right();
        console.log("right arrow key is pressed");
    }
    if (keypressed == "87") {
        new_image('wall.jpg');
        console.log("w key is pressed");
    }
    if (keypressed == "71") {
        new_image('ground.png');
        console.log("g key is pressed");
    }
    if (keypressed == "76") {
        new_image('light_green.png');
        console.log("l key is pressed");
    }
    if (keypressed == "84") {
        new_image('trunk.jpg');
        console.log("t key is pressed");
    }
    if (keypressed == "82") {
        new_image('roof.jpg');
        console.log("r key is pressed");
    }
    if (keypressed == "89") {
        new_image('yellow_wall.png');
        console.log("y key is pressed");
    }
    if (keypressed == "68") {
        new_image('dark_green.png');
        console.log("d key is pressed");
    }
    if (keypressed == "67") {
        new_image('cloud.jpg');
        console.log("c key is pressed");
    }
    if (keypressed == "85") {
        new_image('different.png');
        console.log("u key is pressed");
    }
}
// Define the starting width and height of the block images



// Define the starting x and y coordinates for the player



// Define a variable named player_object to store object of the player image


// Add a function named player_update() to add the player image







// Add a function named new_image() to add the different images as per the specific keys pressed

