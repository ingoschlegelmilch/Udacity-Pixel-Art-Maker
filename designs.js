// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height, width;
    rows = $("#input_height").val();
    cols = $("#input_width").val();
    table = $("#pixel_canvas");

    for (i = 0; i < rows; i++) {
        table.append("<tr></tr>");
        for (j = 0; j < cols; j++) {
            table.children().last().append("<td></td>");
            }        
        }
          
};

function clearGrid() {
    $("#pixel_canvas").html("");
}

function dyeCell() {
        $("td").on("mousedown", function () {
            var color = $("input[type=color]").val();
            $(this).css("background-color", color);
        })
    };

    $("#sizePicker").on("submit", function(evt) {
    clearGrid();
    makeGrid();
    dyeCell();
    evt.preventDefault();
});