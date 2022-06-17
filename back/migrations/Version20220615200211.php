<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220615200211 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite ADD file2 VARCHAR(255) DEFAULT NULL, ADD file3 VARCHAR(255) DEFAULT NULL, ADD liseuse2 VARCHAR(255) DEFAULT NULL, ADD liseuse3 VARCHAR(255) DEFAULT NULL, ADD youtube VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD file VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite DROP file2, DROP file3, DROP liseuse2, DROP liseuse3, DROP youtube');
        $this->addSql('ALTER TABLE user DROP file');
    }
}
