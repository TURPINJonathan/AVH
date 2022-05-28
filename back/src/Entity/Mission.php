<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MissionRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MissionRepository::class)]
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
}
