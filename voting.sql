/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.21-MariaDB : Database - voting
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`voting` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `voting`;

/*Table structure for table `business_share` */

DROP TABLE IF EXISTS `business_share`;

CREATE TABLE `business_share` (
  `pk` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `t_content` text DEFAULT NULL,
  `d_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `business_share` */

insert  into `business_share`(`pk`,`t_content`,`d_date`) values 
(3,'attention, All member create db to yourself computer.','2022-01-02 09:30:04');

/*Table structure for table `members` */

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `pk` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `c_name` varchar(20) CHARACTER SET utf8mb4 DEFAULT NULL,
  `b_access_status` tinyint(1) NOT NULL DEFAULT 0,
  `c_ip` varchar(22) CHARACTER SET utf8mb4 DEFAULT NULL,
  `b_lazyboy` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

/*Data for the table `members` */

insert  into `members`(`pk`,`c_name`,`b_access_status`,`c_ip`,`b_lazyboy`) values 
(18,'kkk',1,'127.0.0.1',0);

/*Table structure for table `opinion` */

DROP TABLE IF EXISTS `opinion`;

CREATE TABLE `opinion` (
  `pk` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `c_proposal_id` varchar(10) CHARACTER SET utf8mb4 DEFAULT NULL,
  `b_up` tinyint(1) DEFAULT 0,
  `b_down` tinyint(1) DEFAULT 0,
  `b_revert` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `opinion` */

insert  into `opinion`(`pk`,`c_proposal_id`,`b_up`,`b_down`,`b_revert`) values 
(25,'80',1,0,1);

/*Table structure for table `proposal` */

DROP TABLE IF EXISTS `proposal`;

CREATE TABLE `proposal` (
  `pk` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `c_ip` varchar(22) CHARACTER SET utf8mb4 DEFAULT NULL,
  `c_title` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `t_proposal` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `d_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `n_up` int(11) NOT NULL DEFAULT 0,
  `n_down` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

/*Data for the table `proposal` */

insert  into `proposal`(`pk`,`c_ip`,`c_title`,`t_proposal`,`d_date`,`n_up`,`n_down`) values 
(80,'192.168.115.175','qqqq','qqqqq','2022-01-02 14:11:57',1,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
