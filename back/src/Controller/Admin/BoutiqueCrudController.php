<?php

namespace App\Controller\Admin;

use App\Entity\Boutique;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class BoutiqueCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Boutique::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
