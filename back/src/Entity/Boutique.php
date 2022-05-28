<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BoutiqueRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BoutiqueRepository::class)]
class Boutique
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['boutique_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['boutique_get'])]
    private $titre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['boutique_get'])]
    private $sous_titre;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['boutique_get'])]
    private $overview;

    #[ORM\Column(type: 'text')]
    #[Groups(['boutique_get'])]
    private $detail;

    #[ORM\Column(type: 'decimal', precision: 6, scale: 2)]
    #[Groups(['boutique_get'])]
    private $prix;

    #[ORM\Column(type: 'decimal', precision: 6, scale: 2)]
    #[Groups(['boutique_get'])]
    private $prix_avh;

    #[ORM\Column(type: 'integer', nullable: true)]
    #[Groups(['boutique_get'])]
    private $stock;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['boutique_get'])]
    private $sur_commande;

    #[ORM\Column(type: 'integer', nullable: true)]
    #[Groups(['boutique_get'])]
    private $nb_vente;

    #[ORM\ManyToMany(targetEntity: CategoriesShop::class, inversedBy: 'boutiques')]
    #[Groups(['boutique_get'])]
    private $CategoriesShop;

    public function __construct()
    {
        $this->CategoriesShop = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getSousTitre(): ?string
    {
        return $this->sous_titre;
    }

    public function setSousTitre(?string $sous_titre): self
    {
        $this->sous_titre = $sous_titre;

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

    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(string $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getPrixAvh(): ?string
    {
        return $this->prix_avh;
    }

    public function setPrixAvh(string $prix_avh): self
    {
        $this->prix_avh = $prix_avh;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function isSurCommande(): ?bool
    {
        return $this->sur_commande;
    }

    public function setSurCommande(bool $sur_commande): self
    {
        $this->sur_commande = $sur_commande;

        return $this;
    }

    public function getNbVente(): ?int
    {
        return $this->nb_vente;
    }

    public function setNbVente(?int $nb_vente): self
    {
        $this->nb_vente = $nb_vente;

        return $this;
    }

    /**
     * @return Collection<int, CategoriesShop>
     */
    public function getCategoriesShop(): Collection
    {
        return $this->CategoriesShop;
    }

    public function addCategoriesShop(CategoriesShop $categoriesShop): self
    {
        if (!$this->CategoriesShop->contains($categoriesShop)) {
            $this->CategoriesShop[] = $categoriesShop;
        }

        return $this;
    }

    public function removeCategoriesShop(CategoriesShop $categoriesShop): self
    {
        $this->CategoriesShop->removeElement($categoriesShop);

        return $this;
    }
}
