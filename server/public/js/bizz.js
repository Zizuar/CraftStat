
$(document).ready(function() {

    $(".kickAPI").on("submit", function(event) {
        event.preventDefault();

        const cust_order = document.getElementById("order_search");
        console.log(cust_order);
        $.ajax({
            method: "GET",
            url: "/order" + cust_order
        }).then(function(data) {
            location.reload();
        });
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