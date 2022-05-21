<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220513182336 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create first database';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actualite (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, sous_titre VARCHAR(255) DEFAULT NULL, lieu VARCHAR(255) DEFAULT NULL, overview VARCHAR(255) NOT NULL, paragraphe1 LONGTEXT NOT NULL, paragraphe2 LONGTEXT DEFAULT NULL, paragraphe3 LONGTEXT DEFAULT NULL, paragraphe4 LONGTEXT DEFAULT NULL, paragraphe5 LONGTEXT DEFAULT NULL, paragraphe6 LONGTEXT DEFAULT NULL, paragraphe7 LONGTEXT DEFAULT NULL, paragraphe8 LONGTEXT DEFAULT NULL, paragraphe9 LONGTEXT DEFAULT NULL, paragraphe10 LONGTEXT DEFAULT NULL, focus TINYINT(1) NOT NULL, liseuse VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, aside TINYINT(1) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_caen (id INT AUTO_INCREMENT NOT NULL, horaires VARCHAR(255) NOT NULL, mail VARCHAR(100) NOT NULL, telephone1 INT NOT NULL, telephone2 INT DEFAULT NULL, adresse VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_compte_rendu (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, date DATE NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avh_national (id INT AUTO_INCREMENT NOT NULL, nb_benevoles INT NOT NULL, nb_salaries INT NOT NULL, nb_implantations INT NOT NULL, liseuse VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE boutique (id INT AUTO_INCREMENT NOT NULL, titre VARCHAR(255) NOT NULL, sous_titre VARCHAR(255) DEFAULT NULL, overview VARCHAR(255) NOT NULL, detail LONGTEXT NOT NULL, prix NUMERIC(6, 2) NOT NULL, prix_avh NUMERIC(6, 2) NOT NULL, stock INT DEFAULT NULL, sur_commande TINYINT(1) NOT NULL, nb_vente INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq (id INT AUTO_INCREMENT NOT NULL, questions VARCHAR(255) NOT NULL, reponses LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE legal (id INT AUTO_INCREMENT NOT NULL, rgpd VARCHAR(100) NOT NULL, article LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE mission (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, overview VARCHAR(255) NOT NULL, detail LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partenaire (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, url VARCHAR(255) DEFAULT NULL, liseuse VARCHAR(255) NOT NULL, actif TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, prenom VARCHAR(100) NOT NULL, fonction LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', mot_de_passe VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, telephone INT DEFAULT NULL, bureau TINYINT(1) NOT NULL, role LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', liseuse VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE actualite');
        $this->addSql('DROP TABLE avh_caen');
        $this->addSql('DROP TABLE avh_compte_rendu');
        $this->addSql('DROP TABLE avh_national');
        $this->addSql('DROP TABLE boutique');
        $this->addSql('DROP TABLE faq');
        $this->addSql('DROP TABLE legal');
        $this->addSql('DROP TABLE mission');
        $this->addSql('DROP TABLE partenaire');
        $this->addSql('DROP TABLE user');
    }
}
