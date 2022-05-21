<?php

namespace App\Controller\Admin;

use App\Entity\AvhCompteRendu;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class AvhCompteRenduCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AvhCompteRendu::class;
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
