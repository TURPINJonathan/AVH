<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MissionRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: MissionRepository::class)]
#[Vich\Uploadable]
class Mission
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['Mission_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups(['Mission_get'])]
    private $nom;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Mission_get'])]
    private $overview;

    #[ORM\Column(type: 'text')]
    #[Groups(['Mission_get'])]
    private $detail;

    #[ORM\Column(type: 'boolean', nullable: true)]
    #[Groups(['Mission_get'])]
    private $show_main;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Mission_get'])]
    private $file;

    #[Vich\UploadableField(mapping: 'mission_image', fileNameProperty: 'file')]
    #[Groups(['Mission_get'])]
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

    public function getOverview(): ?string
    {
        return $this->overview;
    }

    public function setOverview(string $overview): self
    {
        $this->overview = $overview;

        return $this;
    }

    public function getDetail(): ?string
    {
        return $this->detail;
    }

    public function setDetail(string $detail): self
    {
        $this->detail = $detail;

        return $this;
    }

    public function isShowMain(): ?bool
    {
        return $this->show_main;
    }

    public function setShowMain(?bool $show_main): self
    {
        $this->show_main = $show_main;

        return $this;
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

    public function __toString()
    {
        return $this->nom;
    }
}
