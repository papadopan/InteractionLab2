var PlanView = function (container, model, id)
{

//variiable to keep the container
this.wrapper = container;

var loadPlanner = function()
{

  var maindiv = container.find("#planning")[0];
  while (maindiv.firstChild)
  {
     maindiv.removeChild(maindiv.firstChild);
   }

   if(id != null)
   {

  var number = model.getNumberOfGuests();
  var dish = model.getDish(id);


  var planning = container.find("#planning")[0];

  var plan_desc = document.createElement("DIV");
  plan_desc.classList.add("plan_desc");


  var heading = document.createElement("H1");
  heading.innerHTML = dish.name;
  var img = document.createElement("IMG");
  img.setAttribute("src" , "./images/" + dish.image);
  var p = document.createElement("P");
  p.innerHTML = dish.description;


  var button = document.createElement("BUTTON");
  button.setAttribute("type" , "button");
  //button.setAttribute("name" , "button");
  button.setAttribute("class" , "deliver");
  button.setAttribute("id" , "back_to_search");
  button.innerHTML = "Back to search";

  plan_desc.appendChild(heading);
  plan_desc.appendChild(img);
  plan_desc.appendChild(p);
  plan_desc.appendChild(button);

  planning.appendChild(plan_desc);

var plan_info = document.createElement("DIV");
plan_info.classList.add("plan_info");

var plan_table = document.createElement("DIV");
plan_table.classList.add("plan_table");

var h1 = document.createElement("H1");
h1.innerHTML = "INGREDIENTS FOR " + number + "PEOPLE";

var table = document.createElement("TABLE");
table.classList.add("table");

var tbody = document.createElement("TBODY");

for (i in dish.ingredients)
{

            var tr = document.createElement("TR");
            var td = document.createElement("TD");
            td.innerHTML = dish.ingredients[i].name;
            var td1 = document.createElement("TD");
            td1.innerHTML = dish.ingredients[i].quantity * number;
            var td2 = document.createElement("TD");
            td2.innerHTML = dish.ingredients[i].unit;
            var td3 = document.createElement("TD");
            td3.innerHTML = dish.ingredients[i].price * number + "SEK";

            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);

}
var hr = document.createElement("HR");
var button = document.createElement("BUTTON");
button.setAttribute("type" , "button");
button.setAttribute("name" , "button");
button.setAttribute("class" , "deliver");
button.setAttribute("id" , "add_to_the_menu");
button.setAttribute("data-id" , id);
button.innerHTML = "Add to the menu";

var total = document.createElement("P");
total.innerHTML = model.getDishPrice(dish.id) * number + " SEK";

table.appendChild(tbody);
plan_table.appendChild(h1);
plan_table.appendChild(table);
plan_table.appendChild(hr);
plan_table.appendChild(button);
plan_table.appendChild(total);
plan_info.appendChild(plan_table);

planning.appendChild(plan_info);

}
}

this.hide = function()
{
  container.hide();
}
this.show = function()
{
  container.show();
}
this.update = function()
{
  loadPlanner();
}
//i am an observer of the model
model.addObservers(this);
loadPlanner();


}
