<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\FaqRepository;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FaqRepository::class)]
class Faq
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['Faq_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Faq_get'])]
    private $questions;

    #[ORM\Column(type: 'text')]
    #[Groups(['Faq_get'])]
    private $reponses;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestions(): ?string
    {
        return $this->questions;
    }

    public function setQuestions(string $questions): self
    {
        $this->questions = $questions;

        return $this;
    }

    public function getReponses(): ?string
    {
        return $this->reponses;
    }

    public function setReponses(string $reponses): self
    {
        $this->reponses = $reponses;

        return $this;
    }
}
