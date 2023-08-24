/*
  Warnings:

  - You are about to drop the column `job_id` on the `employees` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `employees_job_id_key` ON `employees`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `job_id`;
