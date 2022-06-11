<?php

namespace App\Controller\Admin;

use App\Entity\Mission;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class MissionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Mission::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Mission')
            ->setEntityLabelInPlural('Missions')
            ->setSearchFields(['nom', 'overview', 'detail', 'show_main', 'slug']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('nom'),
            TextField::new('overview')->setLabel('Courte description')->setHelp('100 caractères maximum')->setMaxLength(100),
            TextEditorField::new('detail')->setLabel('Détails')->hideOnIndex(),
            TextField::new('imageFile')->setLabel('Image de la mission')->setFormType(VichImageType::class)->hideOnIndex()->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            BooleanField::new('show_main')->setLabel('Afficher également en page d\'accueil ?')->setHelp('Si oui, elle sera automatiquement retravailler en noir et blanc. Souhaitez-vous l\'afficher dans la page d\'accueil ?'),
            ImageField::new('file')->setBasePath('https://avhcaen.fr/back/uploads/mission_image')->onlyOnIndex()->setLabel('Image'),
            SlugField::new('slug')->setTargetFieldName('nom')->setHelp('Apparaîtra dans l\'URL de la page de la mission')->hideOnIndex(),
        ];
    }
}
