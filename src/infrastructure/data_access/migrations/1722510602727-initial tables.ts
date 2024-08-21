import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTables1722510602727 implements MigrationInterface {
    name = 'InitialTables1722510602727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`countries\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`asset_types\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`buyers\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`phoneNumber\` varchar(15) NOT NULL, \`emailId\` varchar(100) NOT NULL, \`clientNumber\` varchar(100) NOT NULL, \`status\` varchar(10) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`asset_bids\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`bidAmount\` decimal(10,2) NOT NULL, \`saleEventAssetId\` int NULL, \`buyerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fee_categories\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`asset_fees\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`amount\` decimal(10,2) NOT NULL, \`saleEventAssetId\` int NULL, \`feeCategoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sale_events\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`number\` varchar(100) NOT NULL, \`startDateTime\` timestamp NOT NULL, \`endDateTime\` timestamp NOT NULL, \`isPublic\` tinyint NOT NULL, \`businessUnitId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sale_event_assets\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`lotNumber\` varchar(20) NOT NULL, \`assetId\` int NULL, \`saleEventId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vendors\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`number\` varchar(100) NOT NULL, \`emailId\` varchar(100) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`vendorNumber\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`assets\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`assetNumber\` varchar(100) NOT NULL, \`reserveAmt\` decimal(10,2) NOT NULL, \`businessUnitId\` int NULL, \`vendorId\` int NULL, \`assetTypeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`business_units\` (\`createdBy\` varchar(255) NOT NULL DEFAULT 'system', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedBy\` varchar(255) NOT NULL DEFAULT 'system', \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`addressLine1\` varchar(255) NOT NULL, \`districtId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`districts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(100) NOT NULL, \`stateId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`states\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` varchar(100) NOT NULL, \`countryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`asset_bids\` ADD CONSTRAINT \`FK_57e0ad4541941a78c68a79a0238\` FOREIGN KEY (\`saleEventAssetId\`) REFERENCES \`sale_event_assets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asset_bids\` ADD CONSTRAINT \`FK_2ec7fd757ba0de21b0347d37695\` FOREIGN KEY (\`buyerId\`) REFERENCES \`buyers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asset_fees\` ADD CONSTRAINT \`FK_5f6cc0d9f4ba24da82e6600782c\` FOREIGN KEY (\`saleEventAssetId\`) REFERENCES \`sale_event_assets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`asset_fees\` ADD CONSTRAINT \`FK_189defa38ea5fd147b1d2044617\` FOREIGN KEY (\`feeCategoryId\`) REFERENCES \`fee_categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_events\` ADD CONSTRAINT \`FK_b3cdff4f5a9173d3f361de2490c\` FOREIGN KEY (\`businessUnitId\`) REFERENCES \`business_units\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_event_assets\` ADD CONSTRAINT \`FK_e4d9a558913a2415cbafff85c29\` FOREIGN KEY (\`assetId\`) REFERENCES \`assets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_event_assets\` ADD CONSTRAINT \`FK_33ad50c92c26cdf60aea1bba8ec\` FOREIGN KEY (\`saleEventId\`) REFERENCES \`sale_events\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`assets\` ADD CONSTRAINT \`FK_5e01c4fe03866473fe362f37279\` FOREIGN KEY (\`businessUnitId\`) REFERENCES \`business_units\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`assets\` ADD CONSTRAINT \`FK_00a74264744330bc2ab17724d78\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`assets\` ADD CONSTRAINT \`FK_d82ca9f312fb1f454db51ef28d2\` FOREIGN KEY (\`assetTypeId\`) REFERENCES \`asset_types\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`business_units\` ADD CONSTRAINT \`FK_ff372120f46b670629a2dbb0c42\` FOREIGN KEY (\`districtId\`) REFERENCES \`districts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`districts\` ADD CONSTRAINT \`FK_2f1d5fff23055266790cc374f0c\` FOREIGN KEY (\`stateId\`) REFERENCES \`states\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`states\` ADD CONSTRAINT \`FK_76ac7edf8f44e80dff569db7321\` FOREIGN KEY (\`countryId\`) REFERENCES \`countries\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
   
        // add dump data
        await queryRunner.query(`INSERT INTO \`countries\` (\`id\`, \`value\`) VALUES (1, 'India'), (2, 'USA')`);
        await queryRunner.query(`INSERT INTO \`states\` (\`id\`, \`value\`, \`countryId\`) VALUES (1, 'Kerala', 1), (2, 'TamilNadu', 1), (3, 'California', 2), (4, 'Texas', 2)`);
        await queryRunner.query(`INSERT INTO \`districts\` (\`id\`, \`value\`, \`stateId\`) VALUES (1, 'Thrissur', 1), (2, 'Ernamkulam', 1), (3, 'Chennai', 2), (4, 'Coimbatore', 2), (5, 'San Francisco', 3), (6, 'Los Angeles', 3), (7, 'Houston', 4), (8, 'Dallas', 4)`);
   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`states\` DROP FOREIGN KEY \`FK_76ac7edf8f44e80dff569db7321\``);
        await queryRunner.query(`ALTER TABLE \`districts\` DROP FOREIGN KEY \`FK_2f1d5fff23055266790cc374f0c\``);
        await queryRunner.query(`ALTER TABLE \`business_units\` DROP FOREIGN KEY \`FK_ff372120f46b670629a2dbb0c42\``);
        await queryRunner.query(`ALTER TABLE \`assets\` DROP FOREIGN KEY \`FK_d82ca9f312fb1f454db51ef28d2\``);
        await queryRunner.query(`ALTER TABLE \`assets\` DROP FOREIGN KEY \`FK_00a74264744330bc2ab17724d78\``);
        await queryRunner.query(`ALTER TABLE \`assets\` DROP FOREIGN KEY \`FK_5e01c4fe03866473fe362f37279\``);
        await queryRunner.query(`ALTER TABLE \`sale_event_assets\` DROP FOREIGN KEY \`FK_33ad50c92c26cdf60aea1bba8ec\``);
        await queryRunner.query(`ALTER TABLE \`sale_event_assets\` DROP FOREIGN KEY \`FK_e4d9a558913a2415cbafff85c29\``);
        await queryRunner.query(`ALTER TABLE \`sale_events\` DROP FOREIGN KEY \`FK_b3cdff4f5a9173d3f361de2490c\``);
        await queryRunner.query(`ALTER TABLE \`asset_fees\` DROP FOREIGN KEY \`FK_189defa38ea5fd147b1d2044617\``);
        await queryRunner.query(`ALTER TABLE \`asset_fees\` DROP FOREIGN KEY \`FK_5f6cc0d9f4ba24da82e6600782c\``);
        await queryRunner.query(`ALTER TABLE \`asset_bids\` DROP FOREIGN KEY \`FK_2ec7fd757ba0de21b0347d37695\``);
        await queryRunner.query(`ALTER TABLE \`asset_bids\` DROP FOREIGN KEY \`FK_57e0ad4541941a78c68a79a0238\``);
        await queryRunner.query(`DROP TABLE \`states\``);
        await queryRunner.query(`DROP TABLE \`districts\``);
        await queryRunner.query(`DROP TABLE \`business_units\``);
        await queryRunner.query(`DROP TABLE \`assets\``);
        await queryRunner.query(`DROP TABLE \`vendors\``);
        await queryRunner.query(`DROP TABLE \`sale_event_assets\``);
        await queryRunner.query(`DROP TABLE \`sale_events\``);
        await queryRunner.query(`DROP TABLE \`asset_fees\``);
        await queryRunner.query(`DROP TABLE \`fee_categories\``);
        await queryRunner.query(`DROP TABLE \`asset_bids\``);
        await queryRunner.query(`DROP TABLE \`buyers\``);
        await queryRunner.query(`DROP TABLE \`asset_types\``);
        await queryRunner.query(`DROP TABLE \`countries\``);
    }

}
