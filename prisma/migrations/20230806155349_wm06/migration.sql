-- CreateTable
CREATE TABLE `manager` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `department_manager_id_fkey` FOREIGN KEY (`manager_id`) REFERENCES `manager`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
