/*
  Warnings:

  - A unique constraint covering the columns `[job_id]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Made the column `job_id` on table `employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `job_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `employees_job_id_key` ON `employees`(`job_id`);
