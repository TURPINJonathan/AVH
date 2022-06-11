<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PartenaireRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: PartenaireRepository::class)]
#[Vich\Uploadable]
class Partenaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['Partenaire_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups(['Partenaire_get'])]
    private $nom;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Partenaire_get'])]
    private $url;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Partenaire_get'])]
    private $liseuse;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['Partenaire_get'])]
    private $actif;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Partenaire_get'])]
    private $file;

    #[Vich\UploadableField(mapping: 'partenaire_image', fileNameProperty: 'file')]
    #[Groups(['Partenaire_get'])]
    private $imageFile;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getLiseuse(): ?string
    {
        return $this->liseuse;
    }

    public function setLiseuse(string $liseuse): self
    {
        $this->liseuse = $liseuse;

        return $this;
    }

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    public function __toString()
    {
        return $this->nom;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(?string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(File $file = null): self
    {
        $this->imageFile = $file;

        if ($file) {
            $this->updatedAt = new \DateTimeImmutable('now');
        }

        return $this;
    }
}
