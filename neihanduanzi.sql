/*
 Navicat Premium Data Transfer

 Source Server         : RN
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : neihanduanzi

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 13/12/2021 10:25:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content_type` enum('text','image','audio','video') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`article_id`) USING BTREE,
  INDEX `acticle_users`(`uid`) USING BTREE,
  INDEX `article_articleType1`(`article_type`) USING BTREE,
  CONSTRAINT `acticle_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `article_articleType1` FOREIGN KEY (`article_type`) REFERENCES `article_type` (`type`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('00fae63a-6855-4614-b6ca-d3ff7de7f4f7', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'rn如果打包/{liulei}', '感情', 'text', '', '1637159714029');
INSERT INTO `article` VALUES ('037f695f-57cd-4b2d-90d9-77ed83697b6c', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '重要会议', '经典', 'video', '\\moveApp\\article\\upload_1d57a35dfec42f5cf846e0247d0c7bf6.mp4', '1636983863293');
INSERT INTO `article` VALUES ('0619b65e-2b06-4eb0-bb57-e680bb1e49cb', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '今天是个好日子/{taiyang}', '经典', 'text', '', '1637078410494');
INSERT INTO `article` VALUES ('2ecaec19-51a2-4105-b17a-895a8903a917', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '北大校董发言', '经典', 'video', '\\moveApp\\article\\upload_9d769251f5164d3fba89e73066b0f680.mp4', '1636984213604');
INSERT INTO `article` VALUES ('bde9e3c9-4302-4bbb-b8e9-693c54230e1c', 'c4f35f7f-36ff-4bb8-9322-b61dd52716df', '论文的基本要求', '经典', 'image', '\\moveApp\\article\\upload_cbf4d24adaa27713880743402949b4ae.jpg', '1637247783771');
INSERT INTO `article` VALUES ('e2b3e09a-ce62-479a-b44f-99720b8bf54d', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '/{weixiao}', '经典', 'text', '', '1637761634460');
INSERT INTO `article` VALUES ('e45c98f5-67e3-4a68-8698-8e61990f8951', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'rn无法发送formdata网络请求，百度得知rn0.62版本之后要升级flipper，但是我升级之后导致app闪退 进不去 修改回来一样进不去，有解决办法吗？', '生活', 'text', '', '1636955135339');

-- ----------------------------
-- Table structure for article_type
-- ----------------------------
DROP TABLE IF EXISTS `article_type`;
CREATE TABLE `article_type`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`, `type`) USING BTREE,
  INDEX `type`(`type`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_type
-- ----------------------------
INSERT INTO `article_type` VALUES ('001', '经典', '//pc//article_type//jingdian.webp');
INSERT INTO `article_type` VALUES ('002', '搞笑', '//pc//article_type//gaoxiao.webp');
INSERT INTO `article_type` VALUES ('003', '生活', '//pc//article_type//shenghuo.webp');
INSERT INTO `article_type` VALUES ('004', '美女', '//pc//article_type//meinv.webp');
INSERT INTO `article_type` VALUES ('005', '感情', '//pc//article_type//ganqing.webp');

-- ----------------------------
-- Table structure for attention
-- ----------------------------
DROP TABLE IF EXISTS `attention`;
CREATE TABLE `attention`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `aid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  INDEX `aid`(`aid`) USING BTREE,
  CONSTRAINT `aid` FOREIGN KEY (`aid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of attention
-- ----------------------------
INSERT INTO `attention` VALUES ('111c8ced-a248-4aa3-8f22-9d86e999a20b', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2');
INSERT INTO `attention` VALUES ('abd8e566-fbdd-4089-8ab8-39bb7d25af84', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'b318151c-760f-43b8-b431-6c0bbe17ce40');
INSERT INTO `attention` VALUES ('dfb16ff9-cded-4707-9c27-cf27174124a4', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'c4f35f7f-36ff-4bb8-9322-b61dd52716df');

-- ----------------------------
-- Table structure for blacklist
-- ----------------------------
DROP TABLE IF EXISTS `blacklist`;
CREATE TABLE `blacklist`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `aid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  INDEX `aid`(`aid`) USING BTREE,
  CONSTRAINT `blacklist_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `blacklist_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blacklist
-- ----------------------------

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `comment_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `aid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `audio` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`) USING BTREE,
  INDEX `comment_users`(`uid`) USING BTREE,
  INDEX `comment_users1`(`aid`) USING BTREE,
  INDEX `comment_article`(`article_id`) USING BTREE,
  CONSTRAINT `comment_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comment_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comment_users1` FOREIGN KEY (`aid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('2c190138-9d3a-43aa-8255-38fcc7e33086', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '你好', '', '', '', '1637761530832');
INSERT INTO `comment` VALUES ('3b5115fe-bfcc-4adc-a8a1-cbffe54edd62', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '你好', '', '', '', '1637760900177');
INSERT INTO `comment` VALUES ('5d07519f-76c1-468a-ad9a-f472730cf7ab', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '。。。。', '', '', '', '1637760670665');
INSERT INTO `comment` VALUES ('7531e3f2-b413-4a7d-87f7-e3dadfda26fe', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'e45c98f5-67e3-4a68-8698-8e61990f8951', '直接修改源码包', '', '', '', '1636955135339');
INSERT INTO `comment` VALUES ('e34f5373-a3f6-44ff-a652-85e786bb013a', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '你们', '', '', '', '1637761358668');

-- ----------------------------
-- Table structure for comment2
-- ----------------------------
DROP TABLE IF EXISTS `comment2`;
CREATE TABLE `comment2`  (
  `comment2_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `aid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `audio` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`comment2_id`) USING BTREE,
  INDEX `comment_users`(`uid`) USING BTREE,
  INDEX `comment_users1`(`aid`) USING BTREE,
  INDEX `comment_article`(`comment_id`) USING BTREE,
  INDEX `comment2_article`(`article_id`) USING BTREE,
  CONSTRAINT `comment2_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comment2_comment` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comment2_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `comment2_ibfk_3` FOREIGN KEY (`aid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment2
-- ----------------------------
INSERT INTO `comment2` VALUES ('46c74069-7a13-4008-b1b3-9e2af5f090ed', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '5d07519f-76c1-468a-ad9a-f472730cf7ab', '。。', '', '', '', '1637760904904');
INSERT INTO `comment2` VALUES ('5189a6a9-8a00-43a1-b255-12993f794362', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '5d07519f-76c1-468a-ad9a-f472730cf7ab', '公', '', '', '', '1637760676790');
INSERT INTO `comment2` VALUES ('5b31f2a2-3a79-4e68-be46-00582783ee1c', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', 'e45c98f5-67e3-4a68-8698-8e61990f8951', '7531e3f2-b413-4a7d-87f7-e3dadfda26fe', '很棒', '', '', '', '1636955135339');
INSERT INTO `comment2` VALUES ('73f987b0-93b2-4e1e-9eea-a922cb8c8020', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c', 'e34f5373-a3f6-44ff-a652-85e786bb013a', '。。', '', '', '', '1637761364966');
INSERT INTO `comment2` VALUES ('7f78fb26-5798-4d9b-a531-bb50d3e372c0', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', '037f695f-57cd-4b2d-90d9-77ed83697b6c', '3b5115fe-bfcc-4adc-a8a1-cbffe54edd62', '。。。。', '', '', '', '1637761539233');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `telphone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1',
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `education` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学历',
  `constellation` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '星座',
  `individuality` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '个性',
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '管理',
  `usable` tinyint(0) NULL DEFAULT NULL COMMENT '可用',
  PRIMARY KEY (`uid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('abe3589f-9327-4ff3-a302-9155b7e8f9c2', '新用户15119909531', '15119909531', '$2b$11$dQ/AMj7S/sYgJnMbCVs6.OsM6sPIw7gWJ8PI6ozzTftWYqRLrqHYy', '/moveApp/avatar/default.webp', '1', '', '', '', '', '', '0', 1);
INSERT INTO `users` VALUES ('b318151c-760f-43b8-b431-6c0bbe17ce40', '揽月。。', '13512712408', '$2b$11$dZEIrwYWYwC3dsQGzUJ51.I3Z93jUJoMNYFZHZaf3RKsWaES6LkpK', '/moveApp/avatar/upload_5fc21535bf98f30b9baeb7c42e5204e9.jpg', '1', '广州', '2021-11-06', '高职(大专)', '双子座', 'react是最好\r\n的语言', '0', 1);
INSERT INTO `users` VALUES ('c4f35f7f-36ff-4bb8-9322-b61dd52716df', '违规用户@13729184004', '13729184004', '$2b$11$mJF0ZcokNv7UWaesMdfbfO/GhuVpL1Nifiodz39Ko4AS2GspzOMKS', '/moveApp/avatar/upload_cacda84c20c29e57db4fd85be8afb4c6.webp', '0', '', '', '', '', '', '2', 1);

-- ----------------------------
-- Table structure for userslike_article
-- ----------------------------
DROP TABLE IF EXISTS `userslike_article`;
CREATE TABLE `userslike_article`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userslike_article_users`(`uid`) USING BTREE,
  INDEX `userslike_article_article`(`article_id`) USING BTREE,
  CONSTRAINT `userslike_article_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `userslike_article_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userslike_article
-- ----------------------------
INSERT INTO `userslike_article` VALUES ('03cc510f-f992-4d18-b022-7e2b2ace81e2', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', '00fae63a-6855-4614-b6ca-d3ff7de7f4f7');
INSERT INTO `userslike_article` VALUES ('4e41a987-18b7-479c-8b70-d52d8456cf34', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', '037f695f-57cd-4b2d-90d9-77ed83697b6c');
INSERT INTO `userslike_article` VALUES ('501ccd26-a83a-4ca5-ae7f-4333bae597af', 'abe3589f-9327-4ff3-a302-9155b7e8f9c2', '037f695f-57cd-4b2d-90d9-77ed83697b6c');
INSERT INTO `userslike_article` VALUES ('ac8e94d6-f5b6-43df-8abb-2cd595a26302', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'e2b3e09a-ce62-479a-b44f-99720b8bf54d');
INSERT INTO `userslike_article` VALUES ('cd1bdf22-3c1f-40a1-995d-b7658d5311bb', 'b318151c-760f-43b8-b431-6c0bbe17ce40', 'e45c98f5-67e3-4a68-8698-8e61990f8951');

-- ----------------------------
-- Table structure for userslike_comment
-- ----------------------------
DROP TABLE IF EXISTS `userslike_comment`;
CREATE TABLE `userslike_comment`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userslike_comment_users`(`uid`) USING BTREE,
  INDEX `userslike_comment_article`(`comment_id`) USING BTREE,
  CONSTRAINT `userslike_comment_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userslike_comment
-- ----------------------------
INSERT INTO `userslike_comment` VALUES ('8139bd4f-b22b-4a59-b3f4-817552afcfb5', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '2c190138-9d3a-43aa-8255-38fcc7e33086');
INSERT INTO `userslike_comment` VALUES ('8624db37-e055-4b10-a85c-6f85a40043b2', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '3b5115fe-bfcc-4adc-a8a1-cbffe54edd62');
INSERT INTO `userslike_comment` VALUES ('cadd9b3e-2500-4b76-b817-e7652ecd2d10', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '5d07519f-76c1-468a-ad9a-f472730cf7ab');
INSERT INTO `userslike_comment` VALUES ('cfcb4841-3fad-4cbb-865e-5584085d75c3', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '7531e3f2-b413-4a7d-87f7-e3dadfda26fe');

-- ----------------------------
-- Table structure for usersunlike_article
-- ----------------------------
DROP TABLE IF EXISTS `usersunlike_article`;
CREATE TABLE `usersunlike_article`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `usersunlike_article_users`(`uid`) USING BTREE,
  INDEX `usersunlike_article_article`(`article_id`) USING BTREE,
  CONSTRAINT `usersunlike_article_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `usersunlike_article_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usersunlike_article
-- ----------------------------
INSERT INTO `usersunlike_article` VALUES ('3c761e53-42d9-4f48-8adc-5744aeb70ab2', 'b318151c-760f-43b8-b431-6c0bbe17ce40', '037f695f-57cd-4b2d-90d9-77ed83697b6c');

-- ----------------------------
-- Table structure for usersunlike_comment
-- ----------------------------
DROP TABLE IF EXISTS `usersunlike_comment`;
CREATE TABLE `usersunlike_comment`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `usersunlike_comment_users`(`uid`) USING BTREE,
  INDEX `usersunlike_comment_comment`(`comment_id`) USING BTREE,
  CONSTRAINT `usersunlike_comment_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usersunlike_comment
-- ----------------------------

-- ----------------------------
-- Table structure for violation_article
-- ----------------------------
DROP TABLE IF EXISTS `violation_article`;
CREATE TABLE `violation_article`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `article_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userslike_article_users`(`uid`) USING BTREE,
  INDEX `userslike_article_article`(`article_id`) USING BTREE,
  CONSTRAINT `violation_article_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `violation_article_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of violation_article
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
