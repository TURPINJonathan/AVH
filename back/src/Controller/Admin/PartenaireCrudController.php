<?php

namespace App\Controller\Admin;

use App\Entity\Partenaire;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PartenaireCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Partenaire::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Partenaire')
            ->setEntityLabelInPlural('Partenaires')
            ->setPaginatorPageSize('10');
            // ->setHelp('detail', 'Quelques particularités :')
            // ->setHelp('edit', 'Les images de l\'actualité sont stockées dans le dossier "uploads/actualite_image"')
            // ->setSearchFields(['titre', 'sous-titre', 'lieu', 'url']);
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('nom')->setHelp('Apparaîtra sous le logo du partenaire'),
            UrlField::new('url')->hideOnIndex()->setLabel('Adresse du site internet du partenaire')->setHelp('Permet de renvoyer vers le site internet du partenaire lorsqu\'on clique sur l\'image et d\'améliorer la SEO du site de l\'AVH Caen'),
            TextField::new('liseuse')->hideOnIndex()->setLabel('Description de l\'image')->setHelp('Sera lu par les liseuses d\'écran. 255 caractères maximum'),
            BooleanField::new('actif')->setLabel('Partenaire actif ?')->setHelp('Si non coché, l\'image ne sera pas affichée sur le site de l\'AVH Caen'),
            TextField::new('imageFile')->setLabel('Logo du partenaire')->setFormType(VichImageType::class)->hideOnIndex()->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            ImageField::new('file')->setBasePath('https://avhcaen.fr/back/uploads/partenaire_image')->onlyOnIndex()->setLabel('Image'),
        ];
    }
}
