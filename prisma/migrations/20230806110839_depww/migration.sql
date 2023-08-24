/*
  Warnings:

  - Made the column `manager_id` on table `employees` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_manager_id_fkey`;

-- AlterTable
ALTER TABLE `employees` MODIFY `manager_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_manager_id_fkey` FOREIGN KEY (`manager_id`) REFERENCES `department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
