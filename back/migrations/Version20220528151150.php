<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220528151150 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite_categories (actualite_id INT NOT NULL, categories_id INT NOT NULL, INDEX IDX_955CA77CA2843073 (actualite_id), INDEX IDX_955CA77CA21214B7 (categories_id), PRIMARY KEY(actualite_id, categories_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_compte_rendu_user (avh_compte_rendu_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_7B02701EE2305FF (avh_compte_rendu_id), INDEX IDX_7B02701A76ED395 (user_id), PRIMARY KEY(avh_compte_rendu_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE boutique_categories_shop (boutique_id INT NOT NULL, categories_shop_id INT NOT NULL, INDEX IDX_7E30740CAB677BE6 (boutique_id), INDEX IDX_7E30740C651C157D (categories_shop_id), PRIMARY KEY(boutique_id, categories_shop_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categories_shop (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_actualite (user_id INT NOT NULL, actualite_id INT NOT NULL, INDEX IDX_54720C73A76ED395 (user_id), INDEX IDX_54720C73A2843073 (actualite_id), PRIMARY KEY(user_id, actualite_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE actualite_categories ADD CONSTRAINT FK_955CA77CA2843073 FOREIGN KEY (actualite_id) REFERENCES actualite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actualite_categories ADD CONSTRAINT FK_955CA77CA21214B7 FOREIGN KEY (categories_id) REFERENCES categories (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE avh_compte_rendu_user ADD CONSTRAINT FK_7B02701EE2305FF FOREIGN KEY (avh_compte_rendu_id) REFERENCES avh_compte_rendu (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE avh_compte_rendu_user ADD CONSTRAINT FK_7B02701A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE boutique_categories_shop ADD CONSTRAINT FK_7E30740CAB677BE6 FOREIGN KEY (boutique_id) REFERENCES boutique (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE boutique_categories_shop ADD CONSTRAINT FK_7E30740C651C157D FOREIGN KEY (categories_shop_id) REFERENCES categories_shop (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_actualite ADD CONSTRAINT FK_54720C73A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_actualite ADD CONSTRAINT FK_54720C73A2843073 FOREIGN KEY (actualite_id) REFERENCES actualite (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actualite_categories DROP FOREIGN KEY FK_955CA77CA21214B7');
        $this->addSql('ALTER TABLE boutique_categories_shop DROP FOREIGN KEY FK_7E30740C651C157D');
        $this->addSql('DROP TABLE actualite_categories');
        $this->addSql('DROP TABLE avh_compte_rendu_user');
        $this->addSql('DROP TABLE boutique_categories_shop');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE categories_shop');
        $this->addSql('DROP TABLE user_actualite');
    }
}
