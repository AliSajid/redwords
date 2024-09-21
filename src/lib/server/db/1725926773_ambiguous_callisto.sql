-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `RedWord` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `word` text NOT NULL,
  `levelId` integer NOT NULL,
  `createdAt` numeric DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
  `updatedAt` numeric NOT NULL,
  FOREIGN KEY (`levelId`) REFERENCES `WordLevel`(`id`) ON UPDATE cascade ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE `WordLevel` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `levelName` text NOT NULL,
  `createdAt` numeric DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
  `updatedAt` numeric NOT NULL,
  `levelDisplayName` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `RedWordAudio` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `wordId` integer NOT NULL,
  `voice` text NOT NULL,
  `audioUrl` text,
  `createdAt` numeric DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
  `updatedAt` numeric NOT NULL,
  `exampleField` text,
  FOREIGN KEY (`wordId`) REFERENCES `RedWord`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `RedWord_word_key` ON `RedWord` (`word`);--> statement-breakpoint
CREATE UNIQUE INDEX `WordLevel_levelName_key` ON `WordLevel` (`levelName`);--> statement-breakpoint
CREATE UNIQUE INDEX `RedWordAudio_wordId_voice_key` ON `RedWordAudio` (`wordId`,`voice`);
*/
