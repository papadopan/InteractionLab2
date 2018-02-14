var IndexCtrl = function(view , generalController)
{

  var maindiv = view.wrapper.find("#start_button");

  maindiv.click(function(){
      generalController.hideIndex();
  });


}
