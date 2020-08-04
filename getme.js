
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
var myshows = [{catimg: 'pro1.jpg', catname: 'Nike Running Shoe',catprice: '$ 150'},
               {catimg: 'pro2.jpg', catname: 'Air Casual Shoes',catprice: '$ 250'},
               {catimg: 'pro3.jpg', catname: 'Nike Men\'s Dart',catprice: '$ 350'},
               {catimg: 'pro4.jpg', catname: 'Handbag',catprice: '$ 450'},
               {catimg: 'pro5.jpg', catname: 'Backpack',catprice: '$ 550'}, 
               {catimg: 'pro6.jpg', catname: 'T-shirt misty Rose',catprice: '$ 650'},
               {catimg: 'pro7.jpg', catname: 'Activity Tracker',catprice: '$ 750'},
               {catimg: 'pro8.jpg', catname: 'White Keyboard',catprice: '$ 600'},
               {catimg: 'pro9.jpg', catname: 'Formal Chair',catprice: '$ 8000'},
               {catimg: 'pro10.jpg', catname: 'Echo Speakers',catprice: '$ 3000'}];

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
      $('#pr'+i).html(ele.catprice);
    }
  }


