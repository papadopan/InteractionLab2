var ExampleView = function(container, model) {

	//controller can find these buttons
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmation = container.find("#confirmation");



var loadSideBar = function()
{

					var maindiv = container.find("#dish_space")[0];
					while (maindiv.firstChild)
					{
						 maindiv.removeChild(maindiv.firstChild);
					 }

						var number = model.getNumberOfGuests();
						container.find("#numberList").html(number);

						var dish_menu = model.getFullMenu();

						//add the ordered dishes to the menu
						var dish_space = container.find("#dish_space")[0];

						for (i in dish_menu) {

							var order = document.createElement("DIV");
							order.classList.add("order_dishes");

							var span1 = document.createElement("SPAN");
							var span2 = document.createElement("SPAN");

							span1.innerHTML = dish_menu[i].name;
							span2.innerHTML = "SEK " + model.getDishPrice(dish_menu[i].id) * number;

							order.appendChild(span1);
							order.appendChild(span2);

							dish_space.appendChild(order);

						}
						var price_list = document.createElement("DIV");
						price_list.classList.add("price_list");
						var p = document.createElement("P");
						p.innerHTML = "SEK " + model.getTotalMenuPrice() * number;

						price_list.appendChild(p);

						dish_space.appendChild(price_list);
}

	this.update = function()
	{
			loadSideBar();
	}

	this.show = function(){
		container.show();
	}
	this.hide = function(){
		container.hide();
	}

	//attach this view to listen to the changes of the Dinner Model
	model.addObservers(this);
	loadSideBar();

}
