CREATE TABLE `usernames` (
	`id` text PRIMARY KEY NOT NULL,
	`mcname` text(24),
	`uuid` text(37),
	`created_at` integer NOT NULL,
	`updated_at` integer
);
