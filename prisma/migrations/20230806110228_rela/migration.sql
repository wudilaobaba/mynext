/*
  Warnings:

  - You are about to drop the column `departmentId` on the `employees` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[manager_id]` on the table `department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[manager_id]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `employees_departmentId_fkey` ON `employees`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `departmentId`;

-- CreateIndex
CREATE UNIQUE INDEX `department_manager_id_key` ON `department`(`manager_id`);

-- CreateIndex
CREATE UNIQUE INDEX `employees_manager_id_key` ON `employees`(`manager_id`);

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_manager_id_fkey` FOREIGN KEY (`manager_id`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
