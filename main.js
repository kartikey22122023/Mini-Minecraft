// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
canvas.add(block_image_object);
    });
} 
// Define the starting width and height of the block images



// Define the starting x and y coordinates for the player



// Define a variable named player_object to store object of the player image


// Add a function named player_update() to add the player image







// Add a function named new_image() to add the different images as per the specific keys pressed

