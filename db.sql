CREATE TABLE `films_list` (
	`id` varchar(45) NOT NULL,
	`title` varchar(45) NOT NULL,
	`image` varchar(100) NOT NULL,
	`movie_banner` varchar(100) NOT NULL,
	`description` varchar(1000) NOT NULL,
	`director` varchar(45) NOT NULL,
	`producer` varchar(85) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_unicode_ci;
