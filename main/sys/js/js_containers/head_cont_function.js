head = '<!--head--><div class="head"><!--logo_cont--><div class="logo_cont"><img src="main/sys/img/logo/logo.jpg" alt="logo"></div><!--logo_cont--><!--nav_parent--><div class="nav_parent"><!--android_nav--><div class="android_nav"><!--menu_btn--><button id="menu_btn" onclick="show()"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg></button> <!--menu_btn--><!--cancel_btn--><button id="cancel_btn" onclick="hide()"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90l-690 691z"/></svg> </button> <!--cancel_btn--></div><!--android_nav--><!--desktop_nav--><div class="desktop_nav"> <!--home_btn--><a> <button> Home </button> </a><!--home_btn--><!--contact_btn--><a><button> Contact </button></a> <!--contact_btn--><!--about_btn--><a><button> About </button> </a> <!--about_btn--> <!--order_btn--><a href="main/pages/bin/ordering_pages/order_Food/index.html"><button> Order</button></a><!--order_btn--></div> <!--desktop_nav--></div><!--nav_parent--></div><!--head--><!--pop_nav--><div id="pop_nav"><!--wrape--><div id="nav_wrape"> <center><a href="#"><button>Home</button> </a><br><a><button> Contact</button></a><br><a><button> About</button></a><br><a href="main/pages/bin/ordering_pages/order_Food/index.html"><button> Order</button></a></center></div><!--wrape--></div><!--pop_nav-->'

document.write(head)

function show(){
    menu_btn.style.display = 'none';
    cancel_btn.style.display = 'block';
    pop_nav.style.display = 'block';
};function hide(){
    menu_btn.style.display = 'block';
    cancel_btn.style.display = 'none';
    pop_nav.style.display = 'none';
}