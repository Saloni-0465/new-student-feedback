-- AlterTable
ALTER TABLE `Issues` ADD COLUMN `status_id` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `Status` (
    `status_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`status_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Issues` ADD CONSTRAINT `Issues_status_id_fkey` FOREIGN KEY (`status_id`) REFERENCES `Status`(`status_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
