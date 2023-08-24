-- AddForeignKey
ALTER TABLE `department` ADD CONSTRAINT `department_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
