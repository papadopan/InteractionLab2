$(function() {
	//We instantiate our model
	var model = new DinnerModel();


	var indexview = new IndexView($("#index") , model);
	var indexctrl = new IndexCtrl(indexview, this);
	// And create the instance of ExampleView
	//and attach the controller to the view
	var exampleView = new ExampleView($("#example"),model);
	var examplectrl = new ExampleCtrl(exampleView , model , this);

	//create the instance for the MoneyView...the view with all the dishes and  the prices
	//and attach the controller to the view
	var money = new MoneyView($("#money"),model);
	var moneyctrl = new MoneyCtrl(money , model, this);

	//create the overview...it is the view with all the dishes populates the search
	//and attach the controller to the view
	var over = new OverView($("#nside"),model);
	var overctrl = new OverCtrl(over , model, this);

	//create the instance for the overview....creates the list with the li items
	//and attach the controller to the view
	var searchView = new SearchView($("#nside"),model);
	var searchctrl = new SearchCtrl(searchView , model , this);

	//create the instance for the planning....the view with the table of the ingredients
	//and attach the listener to the view
	var plan = new PlanView($("#plan"),model);
	var plannerctrl = new PlannerCtrl (plan , model , this )
	//creates the description view....the view with the three dishes and the preparation content
	var desc = new DescView ($("#final_description"),model);

//hide the first view and go to the second
this.hideIndex = function()
{
	indexview.hide();
	exampleView.show();
}
//hide the planner view and go to the main page
this.showFullMenu = function()
{
	indexview.hide();
	exampleView.show();
	over.show();
	plan.hide();
}
//display specific dish
this.displaSpecificDish = function()
{
	//exampleView.hide();
	over.hide();
	plan.show();
}
//confirm the order
this.confirmation = function()
{
	indexview.hide();
	exampleView.hide();
	money.show();
}

this.go_back = function()
{
	money.hide();
	exampleView.show();
	over.show();
	plan.hide();
}
this.print = function()
{
	money.hide();
	desc.show();
}








});
