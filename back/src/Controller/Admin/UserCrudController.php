<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
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
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            TextField::new('email'),
            TextField::new('nom'),
            TextField::new('prenom'),
            TextField::new('fonction'),
            IntegerField::new('telephone'),
            BooleanField::new('bureau'),
            ChoiceField::new('roles')->setChoices([
                'ROLE_SUPERADMIN' => 'ROLE_SUPERADMIN',
                'ROLE_ADMIN' => 'ROLE_ADMIN',
                'ROLE_MODERATEUR' => 'ROLE_MODERATEUR',
                'ROLE_USER' => 'ROLE_USER',
            ])->allowMultipleChoices(),
            TextField::new('password')->hideOnIndex(),
        ];
    }
}
