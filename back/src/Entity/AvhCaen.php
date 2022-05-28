<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AvhCaenRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AvhCaenRepository::class)]
class AvhCaen
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhCaen_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['AvhCaen_get'])]
    private $horaires;

    #[ORM\Column(type: 'string', length: 100)]
    #[Groups(['AvhCaen_get'])]
    private $mail;

    #[ORM\Column(type: 'integer')]
    #[Groups(['AvhCaen_get'])]
    private $telephone1;

    #[ORM\Column(type: 'integer', nullable: true)]
    #[Groups(['AvhCaen_get'])]
    private $telephone2;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['AvhCaen_get'])]
    private $adresse;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHoraires(): ?string
    {
        return $this->horaires;
    }

    public function setHoraires(string $horaires): self
    {
        $this->horaires = $horaires;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getTelephone1(): ?int
    {
        return $this->telephone1;
    }

    public function setTelephone1(int $telephone1): self
    {
        $this->telephone1 = $telephone1;

        return $this;
    }

    public function getTelephone2(): ?int
    {
        return $this->telephone2;
    }

    public function setTelephone2(?int $telephone2): self
    {
        $this->telephone2 = $telephone2;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }
}
