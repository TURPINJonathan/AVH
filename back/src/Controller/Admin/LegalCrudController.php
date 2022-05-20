<?php

namespace App\Controller\Admin;

use App\Entity\Legal;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class LegalCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Legal::class;
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
