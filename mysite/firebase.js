//  firebase DBMS
//web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBirCr6pxIVZw0bN3KwMbLaCnOCdRnXGbw",
    authDomain: "getmestore-messages.firebaseapp.com",
    databaseURL: "https://getmestore-messages.firebaseio.com",
    projectId: "getmestore-messages",
    storageBucket: "getmestore-messages.appspot.com",
    messagingSenderId: "633038537341",
    appId: "1:633038537341:web:0bffaef3b801b755afa714",
    measurementId: "G-F90STWWRS5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//reference messages collection
var messagesref = firebase.database().ref('messages');


 // form submit
document.getElementById('contact-form').addEventListener('submit', submitform);


//take input(submmit form) and send messages to database function
function submitform(e){
  e.preventDefault();

  //get values
  var name = inputval('name');
  var phone = inputval('phone');
  var email = inputval('email');
  var message = inputval('message');
  firebmessage(name,phone,email,message);  
  document.querySelector('.alert').style.display = 'block';

  //hide after 3 seconds
  setTimeout(function(){
  		document.querySelector('.alert').style.display = 'none';
  },3000);

  //refresh form
  document.getElementById('contact-form').reset();
}


//fomr values functions
function inputval(id){
	return document.getElementById(id).value;
}

//message to firebase

function firebmessage(name ,phone ,email ,message){
	var newref = messagesref.push();
    newref.set({
    	name   : name,
    	phone  : phone,
    	email  : email,
    	message: message
    }); 
}