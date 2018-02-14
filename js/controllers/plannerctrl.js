var PlannerCtrl = function(view , model , generalController)
{

  //wrapper variable is the container

    //button to add the dish to the main menu
    view.wrapper.delegate("#add_to_the_menu" , "click" , function(){
      var id = view.wrapper.find("#add_to_the_menu").attr("data-id");
      var dish = model.getDish(id);
      alert("You will add the dish " + dish.name + " to your menu?");
      model.addDishToMenu(id);
    });

    //button to go back to the main view
    view.wrapper.delegate("#back_to_search" , "click",function(){
      generalController.showFullMenu();
    });



}
