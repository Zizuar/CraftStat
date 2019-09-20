USE GCDC_CraftStat;

SELECT * FROM orders;

INSERT INTO orders (order_number, master_number, requested_ship_date, return_date, comment_one)
VALUES ("175884", 122745, 2019-09-25, 2019-09-25, "FedEx"),
  ("TX1007481", 175490, 2019-09-20, 2019-09-25, "OUR TRUCK")