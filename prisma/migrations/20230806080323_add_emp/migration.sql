-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `job_id` INTEGER NOT NULL,
    `salary` DOUBLE NOT NULL,
    `manager_id` INTEGER NOT NULL,
    `department_id` INTEGER NOT NULL,
    `commission_pct` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `employees_first_name_key`(`first_name`),
    UNIQUE INDEX `employees_email_key`(`email`),
    UNIQUE INDEX `employees_job_id_key`(`job_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
