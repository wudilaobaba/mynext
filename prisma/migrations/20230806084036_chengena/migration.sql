/*
  Warnings:

  - A unique constraint covering the columns `[manager_id]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `employees_manager_id_key` ON `employees`(`manager_id`);
