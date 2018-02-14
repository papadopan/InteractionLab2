
var SearchView = function (container, model) {


   var types_of_dishes = new Array();
   types_of_dishes = model.getTypes();


   for (i in types_of_dishes)
   {
     var itemli = document.createElement("LI");
     var itema = document.createElement("A");
     itema.setAttribute("href" , "#");
     itema.innerHTML = types_of_dishes[i];
     itemli.appendChild(itema);
     var dropdown = container.find("#dropdown")[0];
     dropdown.appendChild(itemli);
   }

   //change the text to the dropdown menu
   $("#dropdown li a").click( function (){
     $("#search").text(this.textContent);
   });

   this.hide = function()
   {
     container.hide();
   }
   this.show = function()
   {
     container.show();
   }



}
