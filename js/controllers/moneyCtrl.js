var MoneyCtrl = function(view , model  , generalControler)
{

view.print_full_recipe.click(function()
{
    desc = new DescView ($("#print"),model);
    generalControler.print();
});
view.go_back.click(function(){
  generalControler.go_back();
});

}
