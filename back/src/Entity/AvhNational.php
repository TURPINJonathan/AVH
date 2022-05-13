<?php

namespace App\Entity;

use App\Repository\AvhNationalRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AvhNationalRepository::class)]
class AvhNational
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer')]
    private $nb_benevoles;

    #[ORM\Column(type: 'integer')]
    private $nb_salaries;

    #[ORM\Column(type: 'integer')]
    private $nb_implantations;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $liseuse;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbBenevoles(): ?int
    {
        return $this->nb_benevoles;
    }

    public function setNbBenevoles(int $nb_benevoles): self
    {
        $this->nb_benevoles = $nb_benevoles;

        return $this;
    }

    public function getNbSalaries(): ?int
    {
        return $this->nb_salaries;
    }

    public function setNbSalaries(int $nb_salaries): self
    {
        $this->nb_salaries = $nb_salaries;

        return $this;
    }

    public function getNbImplantations(): ?int
    {
        return $this->nb_implantations;
    }

    public function setNbImplantations(int $nb_implantations): self
    {
        $this->nb_implantations = $nb_implantations;

        return $this;
    }

    public function getLiseuse(): ?string
    {
        return $this->liseuse;
    }

    public function setLiseuse(?string $liseuse): self
    {
        $this->liseuse = $liseuse;

        return $this;
    }
}
