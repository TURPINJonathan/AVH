<?php

namespace App\Entity;

use App\Repository\LegalRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LegalRepository::class)]
class Legal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $rgpd;

    #[ORM\Column(type: 'text')]
    private $article;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRgpd(): ?string
    {
        return $this->rgpd;
    }

    public function setRgpd(string $rgpd): self
    {
        $this->rgpd = $rgpd;

        return $this;
    }

    public function getArticle(): ?string
    {
        return $this->article;
    }

    public function setArticle(string $article): self
    {
        $this->article = $article;

        return $this;
    }
}
