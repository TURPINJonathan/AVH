<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[Vich\Uploadable]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['Actualite_get', 'User_get'])]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $email;

    #[ORM\Column(type: 'json')]
    #[Groups(['Actualite_get', 'User_get'])]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['Actualite_get', 'User_get'])]
    private $nom;

    #[ORM\Column(type: 'string', length: 20)]
    #[Groups(['Actualite_get', 'User_get'])]
    private $prenom;

    #[ORM\Column(type: 'string', length: 40)]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $fonction;

    #[ORM\Column(type: 'integer')]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $telephone;

    #[ORM\Column(type: 'boolean', nullable: true)]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $bureau;

    #[ORM\ManyToMany(targetEntity: Actualite::class, inversedBy: 'users')]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $actualite;

    #[ORM\ManyToMany(targetEntity: AvhCompteRendu::class, mappedBy: 'User')]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $avhCompteRendus;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $file;

    #[Vich\UploadableField(mapping: 'user_image', fileNameProperty: 'file')]
    #[Groups(['Actualite_post, Actualite_get', 'User_get'])]
    private $imageFile;


    public function __toString()
    {
        return $this->nom;
    }

    public function __construct()
    {
        $this->actualite = new ArrayCollection();
        $this->avhCompteRendus = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getFonction(): ?string
    {
        return $this->fonction;
    }

    public function setFonction(string $fonction): self
    {
        $this->fonction = $fonction;

        return $this;
    }

    public function getTelephone(): ?int
    {
        return $this->telephone;
    }

    public function setTelephone(int $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function isBureau(): ?bool
    {
        return $this->bureau;
    }

    public function setBureau(?bool $bureau): self
    {
        $this->bureau = $bureau;

        return $this;
    }

    /**
     * @return Collection<int, Actualite>
     */
    public function getActualite(): Collection
    {
        return $this->actualite;
    }

    public function addActualite(Actualite $actualite): self
    {
        if (!$this->actualite->contains($actualite)) {
            $this->actualite[] = $actualite;
        }

        return $this;
    }

    public function removeActualite(Actualite $actualite): self
    {
        $this->actualite->removeElement($actualite);

        return $this;
    }

    /**
     * @return Collection<int, AvhCompteRendu>
     */
    public function getAvhCompteRendus(): Collection
    {
        return $this->avhCompteRendus;
    }

    public function addAvhCompteRendu(AvhCompteRendu $avhCompteRendu): self
    {
        if (!$this->avhCompteRendus->contains($avhCompteRendu)) {
            $this->avhCompteRendus[] = $avhCompteRendu;
            $avhCompteRendu->addUser($this);
        }

        return $this;
    }

    public function removeAvhCompteRendu(AvhCompteRendu $avhCompteRendu): self
    {
        if ($this->avhCompteRendus->removeElement($avhCompteRendu)) {
            $avhCompteRendu->removeUser($this);
        }

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
}
