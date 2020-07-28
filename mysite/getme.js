
//function to generate randoms without duplicates...
function randint(length) {
  randlist=[];
  for(var i = 0; i < length; i++){
    randlist.push(i);
  }
  for(var j = 0; j < length*100; j++){
     x=Math.floor(Math.random()* length);
     temp = randlist[0];
     randlist[0]=randlist[x];
     randlist[x]=temp;
  }
  return randlist;
} 

//decalration of swiper items...
var myshows = [{catimg: 'cat1.jpg', catname: 'Mens Fashion'},
               {catimg: 'cat2.jpg', catname: 'Womens Fashion'},
               {catimg: 'cat3.jpg', catname: 'Bags'},
               {catimg: 'cat4.jpg', catname: 'Kids Fashions'},
               {catimg: 'cat5.jpg', catname: 'Electronics'},
               {catimg: 'cat6.jpg', catname: 'Books'},
               {catimg: 'cat7.jpg', catname: 'Footwear'},
               {catimg: 'cat8.jpg', catname: 'Furniture'},
               {catimg: 'cat9.jpg', catname: 'Laptops'},
               {catimg: 'cat10.jpg', catname: 'Mobiles'}];

//jquery function to call randimg
$(document).ready(function(){
randimg(myshows);
});


//randimg function to generate random slides...
function randimg(img){
    "use strict";
    var index=0,
    i=10,
    y=randint(10);
    while(i--){
      index = y[i];
      var ele = myshows[index];
      $('#p'+i).attr("src", ele.catimg);
      $('#h'+i).html(ele.catname);
    }
  }


