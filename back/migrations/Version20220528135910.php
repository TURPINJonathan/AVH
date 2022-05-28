<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220528135910 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE boutique_boutique');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE boutique_boutique (boutique_source INT NOT NULL, boutique_target INT NOT NULL, INDEX IDX_F85CC58255A8C009 (boutique_target), INDEX IDX_F85CC5824C4D9086 (boutique_source), PRIMARY KEY(boutique_source, boutique_target)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE boutique_boutique ADD CONSTRAINT FK_F85CC5824C4D9086 FOREIGN KEY (boutique_source) REFERENCES boutique (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE boutique_boutique ADD CONSTRAINT FK_F85CC58255A8C009 FOREIGN KEY (boutique_target) REFERENCES boutique (id) ON DELETE CASCADE');
    }
}
