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
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('titre')->setLabel('Titre de l\'actualité')->setHelp('255 caractères maximum')->setMaxLength(255),
            TextField::new('sous_titre')->setLabel('Sous-titre de l\'actualité')->setHelp('255 caractères maximum')->setMaxLength(255)->hideOnIndex(),
            TextField::new('lieu')->setLabel('Lieu de l\'actualité')->setHelp('255 caractères maximum')->setMaxLength(255)->hideOnIndex(),
            TextField::new('overview')->setLabel('Courte description de l\'actualité.')->setHelp('Sera visible dans la page des actualités et sur l\'actualité en elle-même. 255 caractères maximum')->setMaxLength(255)->hideOnIndex(),
            BooleanField::new('focus')->setLabel('Mettre l\'article en avant l\'actualité ?')->setHelp('Si oui, elle sera affichée en haut de la page d\'actualités. ! ATTENTION ! UNE SEULE ACTUALITE DOIT ÊTRE MISE EN AVANT.')->hideOnIndex(),
            TextField::new('imageFile')->setLabel('Image de l\'actualité')->setFormType(VichImageType::class)->hideOnIndex()->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            ImageField::new('file')->setBasePath('https://avhcaen.fr/back/uploads/actualite_image')->onlyOnIndex()->setLabel('Image'),
            TextField::new('liseuse')->setLabel('Description de l\'image')->setHelp('Sera lu par les liseuses d\'écran. 255 caractères maximum')->setMaxLength(255),
            BooleanField::new('aside')->setLabel('Afficher l\'image en publicité ?')->setHelp('Si oui, elle sera affichée à certains endroits du site.'),
            TextEditorField::new('paragraphe1')->setLabel('Premier paragraphe')->hideOnIndex(),
            TextEditorField::new('paragraphe2')->setLabel('Second paragraphe')->hideOnIndex(),
            TextEditorField::new('paragraphe3')->setLabel('Troisième paragraphe')->hideOnIndex(),
            SlugField::new('url')->setTargetFieldName('titre')->setLabel('Slug')->setHelp('! RESERVE AU DEVELOPPEUR ! Apparaîtra dans l\'URL de la page de l\'actualité')->hideOnIndex(),
            // AssociationField::new('categories')->setLabel('Catégories')->setHelp('Choisissez les catégories dans lesquelles l\'actualité apparaîtra.'),
            // AssociationField::new('tags')->setLabel('Tags')->setHelp('Choisissez les tags qui apparaîtront sur l\'actualité.'),
            // AssociationField::new('users')->setLabel('Auteur')->setHelp('Choisissez l\'auteur de l\'actualité.')->hideOnForm(),
        ];
    }
}
