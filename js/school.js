/*put the submenu's special class name as arguments, if find a match then add the show class
to the submenu
var arrays = new Array(".about",".news_events",".fundraising",".parents_portal",".contact");
//store opended submenu
var openedmenu;

function dropDown(tagId) {
  if (openedmenu != null) {
    //hide the previous opened submenu
    openedmenu.classList.remove("show");
  }
  for (var i = 0; i < arrays.length; i++) {
    console.log(tagId);
    if (arrays[i] == tagId) {
      console.log(arrays[i]);
      document.querySelector(arrays[i]).classList.toggle("show");
      //record the opened submenu
      openedmenu = document.querySelector(arrays[i]);
    }
  }
}
*/

window.onload = function(){
  //click the hamburger menu icon to show and fold the menu
  var burger=document.querySelector('.nav_burger');
  console.log(burger);
  var menu=document.querySelector('.navigation');
  burger.addEventListener("click",function(){
    menu.classList.toggle('show');
  },false);

  //click the level one menu to show and fold the submenu
  var menu_one=document.querySelectorAll('.dropdown');
  //store the opened menu
  var openedmenu;
  for(var i=0;i<menu_one.length;i++){
    menu_one[i].addEventListener("click",function(){
      var menu_two_item=this.nextElementSibling;
      //close previous opened dropdown menu once user click another level one menu
      if(openedmenu!=menu_two_item&&openedmenu!=null){
        openedmenu.classList.remove('show');
      }
      menu_two_item.classList.toggle('show');
      openedmenu=menu_two_item;
      console.log(openedmenu);
    },false);
  }

}
