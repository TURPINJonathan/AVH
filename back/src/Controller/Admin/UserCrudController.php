<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TelephoneField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            EmailField::new('email'),
            TextField::new('nom'),
            TextField::new('prenom'),
            TextField::new('fonction'),
            TelephoneField::new('telephone'),
            BooleanField::new('bureau'),
            ChoiceField::new('roles')->setChoices([
                'ROLE_SUPERADMIN' => 'ROLE_SUPERADMIN',
                'ROLE_ADMIN' => 'ROLE_ADMIN',
                'ROLE_MODERATEUR' => 'ROLE_MODERATEUR',
                'ROLE_USER' => 'ROLE_USER',
            ])->allowMultipleChoices(),
            Field::new('password')->hideOnIndex(),
            // TextField::new('imageFile')->setLabel('Photo de profil')->setFormType(VichImageType::class)->hideOnIndex()->setHelp('Pour une meilleure visibilité, l\'image doit être au format jpg, jpeg, png ou gif et doit faire moins de 2Mo.'),
            // ImageField::new('file')->setBasePath('/uploads/user_image')->onlyOnIndex()->setLabel('Image'),
            // ImageField::new('file')->setBasePath('https://avhcaen.fr/back/uploads/user_image')->onlyOnIndex()->setLabel('Image'),
        ];
    }
}
