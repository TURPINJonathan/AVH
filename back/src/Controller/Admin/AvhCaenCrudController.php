<?php

namespace App\Controller\Admin;

use App\Entity\AvhCaen;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AvhCaenCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AvhCaen::class;
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
