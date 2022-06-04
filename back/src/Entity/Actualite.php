<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ActualiteRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: ActualiteRepository::class)]
#[Vich\Uploadable]
class Actualite
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['Actualite_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Actualite_get'])]
    private $titre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Actualite_get'])]
    private $sous_titre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Actualite_get'])]
    private $lieu;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Actualite_get'])]
    private $overview;

    #[ORM\Column(type: 'text')]
    #[Groups(['Actualite_get'])]
    private $paragraphe1;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['Actualite_get'])]
    private $paragraphe2;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['Actualite_get'])]
    private $paragraphe3;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe4;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe5;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe6;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe7;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe8;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe9;

    #[ORM\Column(type: 'text', nullable: true)]
    private $paragraphe10;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['Actualite_get'])]
    private $focus;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Actualite_get'])]
    private $liseuse;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['Actualite_get'])]
    private $url;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['Actualite_get'])]
    private $aside;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Groups(['Actualite_get'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Groups(['Actualite_get'])]
    private $updatedAt;

    #[ORM\ManyToMany(targetEntity: Categories::class, inversedBy: 'actualites', cascade: ['persist'])]
    #[Groups(['Actualite_get'])]
    private $categorie;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'actualite', cascade: ['persist'])]
    #[Groups(['Actualite_get'])]
    private $users;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    #[Groups(['Actualite_get'])]
    private $tag;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Actualite_get'])]
    private $file;

    #[Vich\UploadableField(mapping: 'actualite_image', fileNameProperty: 'file')]
    #[Groups(['Actualite_get'])]
    private $imageFile;

    public function __construct()
    {
        $this->categorie = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable('dd-mm-YYYY');
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

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(?string $lieu): self
    {
        $this->lieu = $lieu;

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

    public function getParagraphe1(): ?string
    {
        return $this->paragraphe1;
    }

    public function setParagraphe1(string $paragraphe1): self
    {
        $this->paragraphe1 = $paragraphe1;

        return $this;
    }

    public function getParagraphe2(): ?string
    {
        return $this->paragraphe2;
    }

    public function setParagraphe2(?string $paragraphe2): self
    {
        $this->paragraphe2 = $paragraphe2;

        return $this;
    }

    public function getParagraphe3(): ?string
    {
        return $this->paragraphe3;
    }

    public function setParagraphe3(?string $paragraphe3): self
    {
        $this->paragraphe3 = $paragraphe3;

        return $this;
    }

    public function getParagraphe4(): ?string
    {
        return $this->paragraphe4;
    }

    public function setParagraphe4(?string $paragraphe4): self
    {
        $this->paragraphe4 = $paragraphe4;

        return $this;
    }

    public function getParagraphe5(): ?string
    {
        return $this->paragraphe5;
    }

    public function setParagraphe5(?string $paragraphe5): self
    {
        $this->paragraphe5 = $paragraphe5;

        return $this;
    }

    public function getParagraphe6(): ?string
    {
        return $this->paragraphe6;
    }

    public function setParagraphe6(?string $paragraphe6): self
    {
        $this->paragraphe6 = $paragraphe6;

        return $this;
    }

    public function getParagraphe7(): ?string
    {
        return $this->paragraphe7;
    }

    public function setParagraphe7(?string $paragraphe7): self
    {
        $this->paragraphe7 = $paragraphe7;

        return $this;
    }

    public function getParagraphe8(): ?string
    {
        return $this->paragraphe8;
    }

    public function setParagraphe8(?string $paragraphe8): self
    {
        $this->paragraphe8 = $paragraphe8;

        return $this;
    }

    public function getParagraphe9(): ?string
    {
        return $this->paragraphe9;
    }

    public function setParagraphe9(?string $paragraphe9): self
    {
        $this->paragraphe9 = $paragraphe9;

        return $this;
    }

    public function getParagraphe10(): ?string
    {
        return $this->paragraphe10;
    }

    public function setParagraphe10(?string $paragraphe10): self
    {
        $this->paragraphe10 = $paragraphe10;

        return $this;
    }

    public function isFocus(): ?bool
    {
        return $this->focus;
    }

    public function setFocus(bool $focus): self
    {
        $this->focus = $focus;

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

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function isAside(): ?bool
    {
        return $this->aside;
    }

    public function setAside(bool $aside): self
    {
        $this->aside = $aside;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, Categories>
     */
    public function getCategorie(): Collection
    {
        return $this->categorie;
    }

    public function addCategorie(Categories $categorie): self
    {
        if (!$this->categorie->contains($categorie)) {
            $this->categorie[] = $categorie;
        }

        return $this;
    }

    public function removeCategorie(Categories $categorie): self
    {
        $this->categorie->removeElement($categorie);

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addActualite($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeActualite($this);
        }

        return $this;
    }
    
    public function __toString()
    {
        return $this->titre;
    }

    public function getTag(): ?string
    {
        return $this->tag;
    }

    public function setTag(?string $tag): self
    {
        $this->tag = $tag;

        return $this;
    }
}
