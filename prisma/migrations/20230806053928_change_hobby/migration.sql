/*
  Warnings:

  - You are about to drop the column `sex` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `sex`,
    ADD COLUMN `hobby` VARCHAR(191) NOT NULL DEFAULT '羽毛球';
