<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220528140046 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE boutique_categories_shop (boutique_id INT NOT NULL, categories_shop_id INT NOT NULL, INDEX IDX_7E30740CAB677BE6 (boutique_id), INDEX IDX_7E30740C651C157D (categories_shop_id), PRIMARY KEY(boutique_id, categories_shop_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE boutique_categories_shop ADD CONSTRAINT FK_7E30740CAB677BE6 FOREIGN KEY (boutique_id) REFERENCES boutique (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE boutique_categories_shop ADD CONSTRAINT FK_7E30740C651C157D FOREIGN KEY (categories_shop_id) REFERENCES categories_shop (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE boutique_categories_shop');
    }
}
