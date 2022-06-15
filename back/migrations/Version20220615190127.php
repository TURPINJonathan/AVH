<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220615190127 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite DROP paragraphe4, DROP paragraphe5, DROP paragraphe6, DROP paragraphe7, DROP paragraphe8, DROP paragraphe9, DROP paragraphe10');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite ADD paragraphe4 LONGTEXT DEFAULT NULL, ADD paragraphe5 LONGTEXT DEFAULT NULL, ADD paragraphe6 LONGTEXT DEFAULT NULL, ADD paragraphe7 LONGTEXT DEFAULT NULL, ADD paragraphe8 LONGTEXT DEFAULT NULL, ADD paragraphe9 LONGTEXT DEFAULT NULL, ADD paragraphe10 LONGTEXT DEFAULT NULL');
    }
}
