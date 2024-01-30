-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: course
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `vid_id` int NOT NULL,
  `video_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vid_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'new_1705914012666_How to Become a Great Software Developer.mp4'),(2,'new_1705674031270_How to Become a Great Software Developer.mp4'),(3,'new_1705674036097_How to Become a Great Software Developer.mp4'),(4,'new_1705674040287_How to Become a Great Software Developer.mp4'),(5,'new_1705674045478_How to Become a Great Software Developer.mp4'),(6,'new_1705674050333_How to Become a Great Software Developer.mp4'),(7,'new_1705674054557_How to Become a Great Software Developer.mp4'),(8,'new_1705674058498_How to Become a Great Software Developer.mp4'),(9,'new_1705674063820_How to Become a Great Software Developer.mp4'),(10,'new_1705674069404_How to Become a Great Software Developer.mp4'),(11,'new_1705674074949_How to Become a Great Software Developer.mp4'),(12,'new_1705674079689_How to Become a Great Software Developer.mp4'),(13,NULL),(14,'new_1705674084644_How to Become a Great Software Developer.mp4'),(15,'new_1705674089025_How to Become a Great Software Developer.mp4'),(16,'new_1705674093147_How to Become a Great Software Developer.mp4'),(17,'new_1705674096944_How to Become a Great Software Developer.mp4'),(18,'new_1705674101236_How to Become a Great Software Developer.mp4'),(19,'new_1705674104844_How to Become a Great Software Developer.mp4'),(20,'new_1705674109064_How to Become a Great Software Developer.mp4'),(21,'new_1705674246019_How to Become a Great Software Developer.mp4'),(22,'new_1705674251534_How to Become a Great Software Developer.mp4'),(23,'new_1705674254568_How to Become a Great Software Developer.mp4'),(24,'new_1705674258066_How to Become a Great Software Developer.mp4'),(25,'new_1705674261957_How to Become a Great Software Developer.mp4'),(26,'new_1705674263999_How to Become a Great Software Developer.mp4'),(27,'new_1705674266791_How to Become a Great Software Developer.mp4'),(28,'new_1705674269441_How to Become a Great Software Developer.mp4'),(29,'new_1705674272297_How to Become a Great Software Developer.mp4'),(30,'new_1705674274454_How to Become a Great Software Developer.mp4'),(31,'new_1705674276156_How to Become a Great Software Developer.mp4'),(32,'new_1705674277894_How to Become a Great Software Developer.mp4'),(33,'new_1705674279795_How to Become a Great Software Developer.mp4'),(34,'new_1705674281721_How to Become a Great Software Developer.mp4'),(35,'new_1705674283567_How to Become a Great Software Developer.mp4'),(36,'new_1705674285383_How to Become a Great Software Developer.mp4'),(37,'new_1705674287442_How to Become a Great Software Developer.mp4'),(38,'new_1705674289259_How to Become a Great Software Developer.mp4'),(39,'new_1705674291292_How to Become a Great Software Developer.mp4'),(40,'new_1705674293645_How to Become a Great Software Developer.mp4');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-30 12:19:51
