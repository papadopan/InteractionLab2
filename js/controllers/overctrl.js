var OverCtrl = function(view , model  , generalControler)
{

  view.populate("all");

  //when this button is clicked
  //display the dishes based on the type
  view.Search_Button.click(function(){
    var selected_type = view.wrapper.find("#search")[0].textContent;
    var filter = view.wrapper.find("#keyfilter")[0].value;
      view.populate(selected_type , filter);
  });

//when a button from the dishes is clicked track which button is clicked and display the details
//maindiv is accesible through the overview js
var g = view.maindiv.querySelectorAll(".button_pressed");
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){

        $(view.maindiv).delegate(".button_pressed" , "click" , function(){
          var identify = this.getAttribute("data-identify");
          console.log("data " + identify );
          //set the id of the dish to present
          model.setcurrent(identify);
          //call the function to display the specific dish that is clicked
          generalControler.displaSpecificDish();
          })

    })(i);



}



}
