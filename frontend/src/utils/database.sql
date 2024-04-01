-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.1.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE `web` /*!40100 COLLATE 'utf8mb4_general_ci' */;
USE `web`;

-- Dumping structure for table web.jokes
CREATE TABLE IF NOT EXISTS `jokes` (
  `joke_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  PRIMARY KEY (`joke_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table web.jokes: ~4 rows (approximately)
INSERT INTO `jokes` (`joke_id`, `content`) VALUES
	(1, 'A child asked his father, "How were people born?"\r\nSo his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."\r\n\r\nThe child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."\r\n\r\nThe child ran back to his father and said, "You lied to me!"\r\nHis father replied, "No, your mom was talking about her side of the family."'),
	(2, 'Teacher: "Kids,what does the chicken give you?"\r\nStudent: "Meat!"\r\nTeacher: "Very good! Now what does the pig give you?"\r\nStudent: "Bacon!"\r\nTeacher: "Great! And what does the fat cow give you?"\r\nStudent: "Homework!"'),
	(3, 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?"\r\nJimmy replied crying, "Because I heard my daddy tell my mommy, \'I am going to eat that pussy once Jimmy leaves for school today!\'"'),
	(4, 'A housewife, an accountant and a lawyer were asked "How much is 2+2?"\r\nThe housewife replies: "Four!".\r\nThe accountant says: "I think it\'s either 3 or 4.  Let me run those figures through my spreadsheet one more time."\r\nThe lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"');

-- Dumping structure for table web.joke_votes
CREATE TABLE IF NOT EXISTS `joke_votes` (
  `joke_id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `vote` tinyint(4) NOT NULL,
  PRIMARY KEY (`joke_id`,`user`),
  CONSTRAINT `FK-Jokes` FOREIGN KEY (`joke_id`) REFERENCES `jokes` (`joke_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table web.joke_votes: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
