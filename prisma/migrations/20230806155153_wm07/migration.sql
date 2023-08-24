/*
  Warnings:

  - You are about to drop the `manger` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `department_manager_id_fkey`;

-- DropTable
DROP TABLE `manger`;
