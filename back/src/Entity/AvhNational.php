<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AvhNationalRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AvhNationalRepository::class)]
class AvhNational
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhNational_get'])]
    private $id;

    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhNational_get'])]
    private $nb_benevoles;

    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhNational_get'])]
    private $nb_salaries;

    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhNational_get'])]
    private $nb_implantations;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['AvhNational_get'])]
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
    
    // public function __toString()
    // {
    //     return $this->nom;
    // }
}
