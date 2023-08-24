-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_id_fkey`;

-- DropIndex
DROP INDEX `employees_department_id_fkey` ON `employees`;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
