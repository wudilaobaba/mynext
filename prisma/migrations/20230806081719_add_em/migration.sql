/*
  Warnings:

  - Made the column `first_name` on table `employees` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `first_name` VARCHAR(191) NOT NULL,
    MODIFY `last_name` VARCHAR(191) NOT NULL;
