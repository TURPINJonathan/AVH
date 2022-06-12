<?php

namespace App\Controller\Admin;

use App\Entity\AvhNational;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class AvhNationalCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return AvhNational::class;
    }
    
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('NE PAS UTILISER CE BOUTON')
            ->setEntityLabelInPlural('Statistiques de l\'AVH National');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm()->hideOnIndex(),
            IntegerField::new('nb_benevoles')->setLabel('Bénévoles')->setHelp('Nombre de bénévoles au niveau national'),
            IntegerField::new('nb_salaries')->setLabel('Salariés')->setHelp('Nombre de salariés au niveau national'),
            IntegerField::new('nb_implantations')->setLabel('Implantations')->setHelp('Nombre d\'implantations au niveau national'),
        ];
    }
}
