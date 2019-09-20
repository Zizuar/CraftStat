CREATE DATABASE GCDC_CraftStat;

USE GCDC_CraftStat;

CREATE TABLE orders(
  item_id INT AUTO_INCREMENT NOT NULL,
  order_number VARCHAR(45) NOT NULL,
  master_number INT(10) NOT NULL,
  requested_ship_date DATE NOT NULL,
  return_date DATE NOT NULL,
  comment_one VARCHAR(45) NULL,
  primary key(item_id)
);