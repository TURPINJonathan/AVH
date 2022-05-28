<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use App\Repository\CategoriesShopRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CategoriesShopRepository::class)]
class CategoriesShop
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['CategoriesShop_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['CategoriesShop_get'])]
    private $name;

    #[ORM\ManyToMany(targetEntity: Boutique::class, mappedBy: 'CategoriesShop')]
    #[Groups(['CategoriesShop_get'])]
    private $boutiques;

    public function __construct()
    {
        $this->boutiques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Boutique>
     */
    public function getBoutiques(): Collection
    {
        return $this->boutiques;
    }

    public function addBoutique(Boutique $boutique): self
    {
        if (!$this->boutiques->contains($boutique)) {
            $this->boutiques[] = $boutique;
            $boutique->addCategoriesShop($this);
        }

        return $this;
    }

    public function removeBoutique(Boutique $boutique): self
    {
        if ($this->boutiques->removeElement($boutique)) {
            $boutique->removeCategoriesShop($this);
        }

        return $this;
    }
}
