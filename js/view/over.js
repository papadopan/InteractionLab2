var OverView = function(container, model) {

  //save the container to a variable
  //the controller can fetch it
  this.wrapper = container;
  this.planview =   

  this.maindiv = container.find("#info")[0];
  this.Search_Button = container.find("#search_button");

  this.populate = function(selected_type, filter) {
    //if the type is all it will bring all the dishes
    if (selected_type == "all") {
      //show the full Menu
      var full = new Array();
      full = model.getAllMenuDishes();
    }
    //else it will bring the dishes based on the type
    else {
      //call the method getSelectedDish with the user option
      var full = new Array();
      full = model.getAllDishes(selected_type, filter);
    }
    while (this.maindiv.firstChild) {
      this.maindiv.removeChild(this.maindiv.firstChild);
    }

    //create the elements and add the classes for the css
    for (i in full) {
      var cl = full[i].class;
      var div_class = document.createElement("DIV");
      div_class.classList.add(cl);
      div_class.classList.add("button_pressed");
      div_class.setAttribute("data-identify", full[i].id);
      var child_div = document.createElement("DIV");
      child_div.classList.add('brief');
      child_div.innerHTML = full[i].name;
      div_class.appendChild(child_div);
      this.maindiv.appendChild(div_class);
    }

  }


  //show function
  this.show = function() {
    container.show();
  }
  //hide function
  this.hide = function() {
    container.hide();
  }



}
