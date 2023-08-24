/*
  Warnings:

  - You are about to drop the column `wechat` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `user_wechat_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `wechat`,
    ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `facebook` VARCHAR(191) NULL;
