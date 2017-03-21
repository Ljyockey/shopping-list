/*Event for when button is submitted to add that item to the list
Need to create a variable using the <li>closest() and then find a way to make
that span adjustable in new variable. Create variable for user input to add*/
function addItem(input) {
	if ($(".shopping-list :first").html() === undefined) {
	var newItem = ('<li><span class="shopping-item">' + input
		+ '</span>\
		<div class="shopping-item-controls"> \
          <button class="shopping-item-toggle">\
            <span class="button-label">check</span>\
          </button>\
          <button class="shopping-item-delete">\
            <span class="button-label">delete</span>\
          </button>\
        </div>\
      </li>');
	$(".shopping-list").html(newItem);		
}
else {
	var newItem = $(".shopping-list :first").clone();
	newItem.find(".shopping-item").text(input);
	newItem.appendTo(".shopping-list");
}
};

/*Create a toggle class for when the check button is clicked*/
$(".shopping-list").on('click', (".shopping-item-toggle"), function(e) {
	$(this).parent().siblings("span").toggleClass("shopping-item__checked");
});

/*Remove item when delete is clicked*/
$(".shopping-list").on('click', (".shopping-item-delete"), function(e) {
	$(this).closest("li").remove();
});

$("#js-shopping-list-form button").click(function(e) {
	//^^Tried using "submit" instead of click and it didn't work.
	e.preventDefault();
	var item = $("#shopping-list-entry").val();
	addItem(item);
});