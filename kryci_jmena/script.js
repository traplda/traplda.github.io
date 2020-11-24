var all_colors = [
    "#ff1a1a","#1a53ff", "#000000", "#ffff99"
];
var boxes = [
    '.box1','.box2','.box3','.box4','.box5',
    '.box6','.box7','.box8','.box9','.box10',
    '.box11','.box12','.box13','.box14','.box15',
    '.box16','.box17','.box18','.box19','.box20',
    '.box21','.box22','.box23','.box24','.box25',
];
function rand(items) {
    // "|" for a kinda "int div"
    return items[items.length * Math.random() | 0];
};

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
};

var red_counts = 0;
var blue_counts = 0;
var other_counts = 0;

// var random_color = _.sample(all_colors);
$(document).ready(function() {
  $('button').click(function() {
    for (i = 0; i < boxes.length; i++) {
        var new_color = rand(all_colors);
        if (new_color == "#000000") {
           all_colors = arrayRemove(all_colors, "#000000");
        } else if (new_color == "#ffff99") {
            other_counts = other_counts+1;
            if (other_counts == 7) {
                all_colors = arrayRemove(all_colors,"#ffff99");
            } 
        } else if (new_color == "#ff1a1a") {
            red_counts = red_counts+1;
            if (red_counts == 9) {
                all_colors = arrayRemove(all_colors,"#ff1a1a");
                $("article").css('background-color',"#ff1a1a");
            } 
        } else if (new_color == "#1a53ff") {
            blue_counts = blue_counts+1;
            if (blue_counts == 9) {
                all_colors = arrayRemove(all_colors,"#1a53ff");
                $("article").css('background-color',"#1a53ff");
            }; 
        };
        $(boxes[i]).css('background-color',new_color);
      };  
 
    all_colors = ["#ff1a1a","#1a53ff", "#000000", "#ffff99"];
    red_counts = 0;
    blue_counts = 0;
    other_counts = 0;
  }); 
});

