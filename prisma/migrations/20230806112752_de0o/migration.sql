-- DropIndex
DROP INDEX `employees_manager_id_key` ON `employees`;

-- AlterTable
ALTER TABLE `employees` MODIFY `manager_id` INTEGER NULL;
