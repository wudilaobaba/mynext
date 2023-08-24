/*
  Warnings:

  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `department_manager_id_fkey`;

-- DropTable
DROP TABLE `Manager`;

-- CreateTable
CREATE TABLE `manger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `department_manager_id_fkey` FOREIGN KEY (`manager_id`) REFERENCES `manger`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
