/*
  Warnings:

  - You are about to drop the column `jod_id` on the `employees` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employees` DROP COLUMN `jod_id`,
    ADD COLUMN `job_id` VARCHAR(191) NULL;
