// import { Script } from "vm";

$(document).ready(function() {

  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;
      console.log("Validity Check Started");
      $(".form-control-sm").each(function() {
        if ($(this).val() === "") {
          isValid = false;
          console.log("Not Valid");
        }
      });

      $(".kickAPI").each(function() {

        if ($(order_number).val() === "" ) {
          isValid = false;
          console.log("Complete: Validity Check Failed. Sending alert.");
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      const orderData = $("#order_number").val();
      
      console.log('Complete: Validity Check Passed - kickAPI init.', orderData);

      // AJAX post the data to the orders API.
      $.get("/api/orders/:order_number", orderData, function(data) {

        // Grab the result from the AJAX post so that the best match's order and info are displayed.
        $("#orderdb-name").text(data);
        // $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
});


      // Below might be coming up null due to document.ready as a function and not a set Script.

    // let q_order = $("#order_search").val().trim();
    // console.log(q_order);

    // $(".submit").on("click", function(event) {
    //     event.preventDefault();

    //     const cust_order = document.getElementById("q_order");
    //     console.log(cust_order);
        // $.ajax({
        //     method: "GET",
        //     url: "../order/" + cust_order
        // }).then(function(data) {
        //     location.reload();
        // });
    // });

    
// function kickAPI(data){
//     const XHR = new XMLHttpRequest();
//     let urlEncodedData = "";
//     let urlEncodedDataPairs = [];
//     let cust_order = document.getElementById("order-search");

//     for(cust_order in data) {
//         urlEncodedDataPairs.push(encodeURIComponent(cust_order) + '=' + encodedURIComponent(data[cust_order]));
//     }
    
//     urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

//     XHR.addEventListener('load', function(q_order) {
//         console.log('Order Query Submitted');
//     });
//     XHR.addEventListener('error', function(q_order) {
//         alert('Query Failure: Either the order number is invalid or system is not responding.');
//     });
//     XHR.open('POST', 'https://')
// }

