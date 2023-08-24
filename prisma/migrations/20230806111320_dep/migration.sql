-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_manager_id_fkey`;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_id_fkey` FOREIGN KEY (`id`) REFERENCES `department`(`manager_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
