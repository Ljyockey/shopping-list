/*Event for when button is submitted to add that item to the list
Need to create a variable using the <li>closest() and then find a way to make
that span adjustable in new variable. Create variable for user input to add*/
function addItem(input) {
	var newItem = $(".shopping-list :first").clone();
	newItem.find(".shopping-item").text(input);
	newItem.appendTo(".shopping-list");
};

/*Create a toggle class for when the check button is clicked*/
$(".shopping-list").on('click', (".shopping-item-toggle"), function(e) {
	$(this).parent().siblings("span").toggleClass("shopping-item__checked");
});

/*Remove item when delete is clicked*/

$("#js-shopping-list-form button").click(function(e) {
	e.preventDefault();
	var item = $("#shopping-list-entry").val();
	addItem(item);
});