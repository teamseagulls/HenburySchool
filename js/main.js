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

  function toggleClasslist(clickObj,showObj){
    clickObj.addEventListener("click",function(){
      showObj.classList.toggle('show')
    },false);
  }
  //click the hamburger menu icon to show and fold the menu
  function showBurgermenu(){
    var burger=document.querySelector('.burger_btn');

    var menu=document.querySelector('.navigation_list');

    var main_menu=document.querySelector('.navigation_list');
    //click invoke checkbox's onclick event
    toggleClasslist(burger,menu);
  }

  //click the level one menu to show and fold the submenu
  function showSubmenu(){
    var menu_one=document.querySelectorAll('.dropdown');
    //store the opened menu
    var openedmenu;
    for(var i=0,length=menu_one.length;i<length;i++){
      menu_one[i].addEventListener("click",function(){
        console.log(this.children[0]);
        this.children[0].classList.toggle('.iconchange');
        var menu_two_item=this.nextElementSibling;
        //close previous opened dropdown menu once user click another level one menu
        if(openedmenu!=menu_two_item&&openedmenu!=null){
          openedmenu.classList.remove('show');
        }
        menu_two_item.classList.toggle('show');
        openedmenu=menu_two_item;
      },false);
    }
  }

  //click the accordiantitle or accordianplus icon to show and fold block content
  function showAccordian(){
    var accordiantab=document.querySelectorAll('.accordian_tab');
    for(var i=0,length=accordiantab.length;i<length;i++){
      accordiantab[i].addEventListener("click",function(){
        //make the accordianPlus icon active
        this.children[1].classList.toggle('isActive');
        var accordian_content=this.nextElementSibling;
        //show or fold the accordian content
        accordian_content.classList.toggle('accordianActive');
        this.classList.toggle('activeEffect');
      },false);
    }
  }

  /*fixed menu*/
  window.addEventListener("scroll", function(){
    var navbar=document.querySelector('.nav_container');
    var navigation=document.querySelector('.navigation');
    if(navbar.nextElementSibling.getBoundingClientRect().top<=0){
      navigation.classList.add('navfixed');
      console.log(window.scrollY);
    }
  },false);

  showBurgermenu();
  showSubmenu();
  showAccordian();
}
