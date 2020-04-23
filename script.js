function checkentry(evt) {
  var time =parseFloat(evt.currentTarget.value);

  if (time > 24 || time < 1) {
    console.log("Wrong value");
    evt.currentTarget.style.color = "red";
  } else {
    console.log("Correct Value");
    evt.currentTarget.style.color = "black";
  }
 }
  function calculatePrice() {

   var price1 = parseFloat(document.getElementById ("price1").value);


   var currentprice = price1 * 100;


    document.getElementById("CurrentPriceVAL").innerHTML = currentprice;

  }
