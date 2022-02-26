//menu button bit
document.getElementById("MenuButton").onclick = function() {
    CallFunction()};
  function CallFunction() {
    document.getElementById("navbar").classList.toggle("showMenu");
  }
  //slideshow bit
  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,3000);

  function nextSlide(){
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';
  }


//apply now

function ValidateContactForm(){
  var fName = document.ContactForm.fName;
  var sName = document.ContactForm.sName;
  var email = document.ContactForm.email;
  var passwd = document.ContactForm.passwd;

  if (fName.value == "")
  {
    window.alert("Enter your First Name");
    fName.focus();
    return false;
  }
  if (lName.value == "")
  {
    window.alert("e3we3");
    name.focus();
    return false;
  }
  if (email.value == "")
  {
    window.alert("Enter your 33e3 Name");
    name.focus();
    return false;
  }
  if (email.value.indexOf("@", 0) <0)
  {
    window.alert("Enter your First 3243");
    name.focus();
    return false;
  }

  if (passwd.value == "")
  {
    window.alert("Enter your First 4353");
    name.focus();
    return false;
  }

}
