<?php

namespace App\Controller\Admin;

use App\Entity\Actualite;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;

class ActualiteCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Actualite::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Actualité')
            ->setEntityLabelInPlural('Actualités')
            ->setHelp('detail', 'Quelques particularités :')
            ->setHelp('edit', 'Les images de l\'actualité sont stockées dans le dossier "uploads/actualite_image"')
            ->setSearchFields(['titre', 'sous-titre', 'lieu', 'url'])
            ->setDefaultSort(['id' => 'DESC'])
            ->setPaginatorPageSize('20');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            //! INFORMATIONS GENERALES
            FormField::addPanel('<i class="fa-solid fa-circle-question" style="color: blue"></i> Informations générales de l\'actualité'),
            IdField::new('id')
                ->hideOnForm()
                ->hideOnIndex(),
            TextField::new('titre')
                ->setLabel('Titre de l\'actualité')
                ->setHelp('255 caractères maximum')
                ->setMaxLength(255),
            TextField::new('sous_titre')
                ->setLabel('Sous-titre de l\'actualité')
                ->setHelp('255 caractères maximum')
                ->setMaxLength(255)
                ->hideOnIndex(),
            TextField::new('lieu')
                ->setLabel('Lieu de l\'actualité')
                ->setHelp('255 caractères maximum')
                ->setMaxLength(255)
                ->hideOnIndex(),
            TextField::new('overview')
                ->setLabel('Courte description de l\'actualité.')
                ->setHelp('Sera visible dans la page des actualités et sur l\'actualité en elle-même. 255 caractères maximum')
                ->setMaxLength(255)
                ->hideOnIndex(),
            BooleanField::new('focus')
                ->setLabel('Afficher l\'article<br />en page d\'accueil ?')
                ->setLabel('Afficher l\'article en page d\'accueil ?')
                ->setHelp('Si oui, elle sera affichée en haut de la page d\'accueil. ! ATTENTION ! UNE SEULE ACTUALITE DOIT ÊTRE MISE EN AVANT SUR TOUT LE SITE.'),

            //! PREMIER PARAGRAPHE OBLIGATOIRE
            FormField::addPanel('<i class="fa-solid fa-indent" style="color: yellow"></i> Gestion du premier paragraphe (obligatoire)'),
            TextField::new('imageFile')
                ->setLabel('Première image de l\'actualité')
                ->setFormType(VichImageType::class)
                ->hideOnIndex()
                ->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            BooleanField::new('aside')
                ->setLabel('Afficher l\'image en publicité ?')
                ->setHelp('Si oui, elle sera affichée à certains endroits du site.'),
            ImageField::new('file')
                ->setBasePath('https://avhcaen.fr/back/uploads/actualite_image')
                ->onlyOnIndex()
                ->setLabel('Première image'),
            TextField::new('liseuse')
                ->setLabel('Description de la première image')
                ->hideOnIndex()
                ->setHelp('Sera lue par les liseuses d\'écran. 255 caractères maximum')
                ->setMaxLength(255),
            TextEditorField::new('paragraphe1')
                ->setLabel('Premier paragraphe')
                ->hideOnIndex(),

            //! SECOND PARAGRAPHE
            FormField::addPanel('<i class="fa-solid fa-indent" style="color: yellow"></i> Gestion du second paragraphe (optionnel)'),
            TextField::new('imageFile2')
                ->setLabel('Seconde image de l\'actualité')
                ->setFormType(VichImageType::class)
                ->hideOnIndex()
                ->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            ImageField::new('file2')
                ->setBasePath('https://avhcaen.fr/back/uploads/actualite_image')
                ->onlyOnIndex()
                ->setLabel('Seconde image'),
            TextField::new('liseuse2')
                ->setLabel('Description de la seconde image')
                ->hideOnIndex()
                ->setHelp('Sera lue par les liseuses d\'écran. 255 caractères maximum')
                ->setMaxLength(255),
            TextEditorField::new('paragraphe2')
                ->setLabel('Second paragraphe')
                ->hideOnIndex(),

            //! TROISIEME PARAGRAPHE
            FormField::addPanel('<i class="fa-solid fa-indent" style="color: yellow"></i> Gestion du troisième paragraphe (optionnel)'),
            TextField::new('imageFile3')
                ->setLabel('Troisième image de l\'actualité')
                ->setFormType(VichImageType::class)
                ->hideOnIndex()
                ->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            ImageField::new('file3')
                ->setBasePath('https://avhcaen.fr/back/uploads/actualite_image')
                ->onlyOnIndex()
                ->setLabel('Troisième image'),
            TextField::new('liseuse3')
                ->setLabel('Description de la troisème image')
                ->hideOnIndex()
                ->setHelp('Sera lue par les liseuses d\'écran. 255 caractères maximum')
                ->setMaxLength(255),
            TextEditorField::new('paragraphe3')
                ->setLabel('Troisième paragraphe')
                ->hideOnIndex(),

            //! YOUTUBE
            FormField::addPanel('<i class="fa-brands fa-youtube" style="color: red"></i> YOUTUBE'),
            UrlField::new('youtube')
                ->setLabel('Lien de la video YouTube')
                ->setHelp('Si vous ajoutez un lien YouTube, la vidéo sera affichés sur l\'article.')
                ->hideOnIndex(),

            //! CHAMPS ASSOCIES
            // AssociationField::new('categories')
            // ->setLabel('Catégories')
            // ->setHelp('Choisissez les catégories dans lesquelles l\'actualité apparaîtra.'),
            // AssociationField::new('tags')
            // ->setLabel('Tags')
            // ->setHelp('Choisissez les tags qui apparaîtront sur l\'actualité.'),
            AssociationField::new('users')
                ->setLabel('Auteurs')
                ->setHelp('Choisissez l\'auteur de l\'actualité.')
                ->autocomplete()
                ->hideOnForm(),
            // ->hideOnIndex(),

            //! SLUG
            FormField::addPanel('<i class="fa-solid fa-ban" style="color: red"></i> ESPACE RESERVE AU DEVELOPPEUR <i class="fa-solid fa-ban" style="color: red"></i>'),
            SlugField::new('url')
                ->setTargetFieldName('titre')
                ->setLabel('Slug')
                ->setHelp('Réservé au debuguage éventuel. Apparaîtra dans l\'URL de la page de l\'actualité')
                ->hideOnIndex(),

        ];
    }
}
