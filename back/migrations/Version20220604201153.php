<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220604201153 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, sous_titre VARCHAR(255) DEFAULT NULL, lieu VARCHAR(255) DEFAULT NULL, overview VARCHAR(255) NOT NULL, paragraphe1 LONGTEXT NOT NULL, paragraphe2 LONGTEXT DEFAULT NULL, paragraphe3 LONGTEXT DEFAULT NULL, paragraphe4 LONGTEXT DEFAULT NULL, paragraphe5 LONGTEXT DEFAULT NULL, paragraphe6 LONGTEXT DEFAULT NULL, paragraphe7 LONGTEXT DEFAULT NULL, paragraphe8 LONGTEXT DEFAULT NULL, paragraphe9 LONGTEXT DEFAULT NULL, paragraphe10 LONGTEXT DEFAULT NULL, focus TINYINT(1) NOT NULL, liseuse VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, aside TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', tag VARCHAR(50) DEFAULT NULL, file VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE actualite_categories (actualite_id INT NOT NULL, categories_id INT NOT NULL, INDEX IDX_955CA77CA2843073 (actualite_id), INDEX IDX_955CA77CA21214B7 (categories_id), PRIMARY KEY(actualite_id, categories_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_caen (id INT AUTO_INCREMENT NOT NULL, horaires VARCHAR(255) NOT NULL, mail VARCHAR(100) NOT NULL, telephone1 INT NOT NULL, telephone2 INT DEFAULT NULL, adresse VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_compte_rendu (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, date DATE NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_compte_rendu_user (avh_compte_rendu_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_7B02701EE2305FF (avh_compte_rendu_id), INDEX IDX_7B02701A76ED395 (user_id), PRIMARY KEY(avh_compte_rendu_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_national (id INT AUTO_INCREMENT NOT NULL, nb_benevoles INT NOT NULL, nb_salaries INT NOT NULL, nb_implantations INT NOT NULL, liseuse VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE boutique (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, sous_titre VARCHAR(255) DEFAULT NULL, overview VARCHAR(255) NOT NULL, detail LONGTEXT NOT NULL, prix NUMERIC(6, 2) NOT NULL, prix_avh NUMERIC(6, 2) NOT NULL, stock INT DEFAULT NULL, sur_commande TINYINT(1) NOT NULL, nb_vente INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE boutique_categories_shop (boutique_id INT NOT NULL, categories_shop_id INT NOT NULL, INDEX IDX_7E30740CAB677BE6 (boutique_id), INDEX IDX_7E30740C651C157D (categories_shop_id), PRIMARY KEY(boutique_id, categories_shop_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categories_shop (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq (id INT AUTO_INCREMENT NOT NULL, questions VARCHAR(255) NOT NULL, reponses LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE legal (id INT AUTO_INCREMENT NOT NULL, rgpd VARCHAR(100) NOT NULL, article LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE mission (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, overview VARCHAR(255) NOT NULL, detail LONGTEXT NOT NULL, show_main TINYINT(1) DEFAULT NULL, file VARCHAR(255) DEFAULT NULL, slug VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partenaire (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, url VARCHAR(255) DEFAULT NULL, liseuse VARCHAR(255) NOT NULL, actif TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, nom VARCHAR(20) NOT NULL, prenom VARCHAR(20) NOT NULL, fonction VARCHAR(40) NOT NULL, telephone INT NOT NULL, bureau TINYINT(1) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
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
        $this->addSql('ALTER TABLE actualite_categories DROP FOREIGN KEY FK_955CA77CA2843073');
        $this->addSql('ALTER TABLE user_actualite DROP FOREIGN KEY FK_54720C73A2843073');
        $this->addSql('ALTER TABLE avh_compte_rendu_user DROP FOREIGN KEY FK_7B02701EE2305FF');
        $this->addSql('ALTER TABLE boutique_categories_shop DROP FOREIGN KEY FK_7E30740CAB677BE6');
        $this->addSql('ALTER TABLE actualite_categories DROP FOREIGN KEY FK_955CA77CA21214B7');
        $this->addSql('ALTER TABLE boutique_categories_shop DROP FOREIGN KEY FK_7E30740C651C157D');
        $this->addSql('ALTER TABLE avh_compte_rendu_user DROP FOREIGN KEY FK_7B02701A76ED395');
        $this->addSql('ALTER TABLE user_actualite DROP FOREIGN KEY FK_54720C73A76ED395');
        $this->addSql('DROP TABLE actualite');
        $this->addSql('DROP TABLE actualite_categories');
        $this->addSql('DROP TABLE avh_caen');
        $this->addSql('DROP TABLE avh_compte_rendu');
        $this->addSql('DROP TABLE avh_compte_rendu_user');
        $this->addSql('DROP TABLE avh_national');
        $this->addSql('DROP TABLE boutique');
        $this->addSql('DROP TABLE boutique_categories_shop');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE categories_shop');
        $this->addSql('DROP TABLE faq');
        $this->addSql('DROP TABLE legal');
        $this->addSql('DROP TABLE mission');
        $this->addSql('DROP TABLE partenaire');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_actualite');
    }
}
