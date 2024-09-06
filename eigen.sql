/*
 Navicat Premium Dump SQL

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : localhost:3306
 Source Schema         : eigen

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 06/09/2024 21:20:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `stock` int NULL DEFAULT NULL,
  `member_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `returned_at` datetime NULL DEFAULT NULL,
  `borrowed_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, 'JK-45', 'Harry Potter', 1, NULL, 'J.K Rowling', NULL, NULL, NULL, NULL, '2024-09-06 18:17:39');
INSERT INTO `book` VALUES (2, 'SHR-1', 'A Study in Scarlet', 1, 'M001', 'Arthur Conan Doyle', NULL, '2024-09-06 13:36:28', '2024-09-06 13:36:28', NULL, '2024-09-06 18:18:07');
INSERT INTO `book` VALUES (3, 'TW-11', 'Twilight', 1, NULL, 'Stephenie Meyer', NULL, NULL, NULL, NULL, '2024-09-06 18:18:35');
INSERT INTO `book` VALUES (4, 'HOB-83', 'The Hobbit, or There and Back Again', 1, 'M001', 'J.R.R. Tolkien', NULL, '2024-09-06 13:36:28', '2024-09-06 13:36:28', NULL, '2024-09-06 18:19:02');
INSERT INTO `book` VALUES (5, 'NRN-7', 'The Lion, the Witch and the Wardrobe', 1, NULL, 'C.S. Lewis', NULL, NULL, NULL, NULL, '2024-09-06 18:19:26');

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_penalize` tinyint(1) NULL DEFAULT 0,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `code`(`code` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES (0000000001, 'M001', 'Angga', 0, NULL, NULL, '2024-09-06 14:51:00');
INSERT INTO `member` VALUES (0000000002, 'M002', 'Ferry', 0, NULL, NULL, '2024-09-06 14:51:25');
INSERT INTO `member` VALUES (0000000003, 'M003', 'Putri', 0, NULL, NULL, '2024-09-06 14:51:41');

SET FOREIGN_KEY_CHECKS = 1;
