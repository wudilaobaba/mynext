-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_department_id_fkey`;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `departmentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
