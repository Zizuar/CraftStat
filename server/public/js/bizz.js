import { Script } from "vm";

$(document).ready(function() {

// Below might be coming up null due to document.ready as a function and not a set Script.

    // let q_order = $("#order_search").val().trim();
    // console.log(q_order);

    $(".submit").on("click", function(event) {
        event.preventDefault();

        const cust_order = document.getElementById("q_order");
        console.log(cust_order);
        // $.ajax({
        //     method: "GET",
        //     url: "../order/" + cust_order
        // }).then(function(data) {
        //     location.reload();
        // });
    });
    });

    
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