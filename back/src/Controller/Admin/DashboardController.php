<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Actualite;
use App\Entity\AvhCaen;
use App\Entity\AvhCompteRendu;
use App\Entity\AvhNational;
use App\Entity\Boutique;
use App\Entity\Faq;
use App\Entity\Legal;
use App\Entity\Mission;
use App\Entity\Partenaire;
use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    #[Security("is_granted('ROLE_SUPERADMIN') or is_granted('ROLE_ADMIN') or is_granted('ROLE_MODERATEUR') or is_granted('ROLE_USER')")]
    // #[IsGranted(["ROLE_SUPERADMIN","ROLE_ADMIN","ROLE_MODERATEUR"])]
    public function index(): Response
    {
        // return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        // $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        // return $this->redirect($adminUrlGenerator->setController(OneOfYourCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        return $this->render('back/home.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Back Office');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Accueil', 'fa fa-home')->setPermission('ROLE_USER');

        yield MenuItem::subMenu('Gestion', 'fa fa-list-check')->setSubItems([
            MenuItem::linkToCrud('Actualités', 'fa fa-newspaper', Actualite::class)->setPermission('ROLE_USER'),
            MenuItem::linkToCrud('Boutique', 'fa fa-duotone fa-shop', Boutique::class)->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToCrud('Missions', 'fa fa-duotone fa-user-secret', Mission::class)->setPermission('ROLE_MODERATEUR'),
            MenuItem::linkToCrud('Partenaires', 'fa fa-duotone fa-handshake', Partenaire::class)->setPermission('ROLE_MODERATEUR'),
        ]);

        yield MenuItem::subMenu('AVH', 'fa fa-building-flag')->setSubItems([
            MenuItem::linkToCrud('AVH Caen', 'fa fa-duotone fa-location-crosshairs', AvhCaen::class)->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToCrud('AVH Compte Rendu', 'fa fa-duotone fa-file-pen', AvhCompteRendu::class)->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToCrud('AVH National', 'fa fa-duotone fa-earth-europe', AvhNational::class)->setPermission('ROLE_SUPERADMIN'),
        ]);

        yield MenuItem::subMenu('Légal', 'fa fa-scale-balanced')->setSubItems([
            MenuItem::linkToCrud('FAQ', 'fa fa-duotone fa-question', Faq::class)->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToCrud('Législation', 'fa fa-duotone fa-scale-balanced', Legal::class)->setPermission('ROLE_SUPERADMIN'),
        ]);

        yield MenuItem::subMenu('Mises à jour', 'fa fa-spinner')->setSubItems([
            MenuItem::linkToRoute('Juillet 2022', 'fa fa-calendar-days', 'app_juillet2022')->setPermission('ROLE_USER'),
            MenuItem::linkToRoute('Juin 2022', 'fa fa-calendar-days', 'app_juin2022')->setPermission('ROLE_USER'),
        ]);

        yield MenuItem::subMenu('Guide d\'utilisation', 'fa fa-book')->setSubItems([
            MenuItem::linkToRoute('Informations générales : en cours', 'fa fa-circle-info', 'app_guide')->setPermission('ROLE_USER'),
            MenuItem::linkToRoute('Accueil : en cours', 'fa fa-duotone fa-home', 'app_dashboard')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('Utilisateurs : en cours', 'fa fa-duotone fa-user', 'app_utilisateurs')->setPermission('ROLE_SUPERADMIN'),

            MenuItem::section('Gestion'),
            MenuItem::linkToRoute('Actualités : en cours', 'fa fa-duotone fa-newspaper', 'app_actualites')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('Boutique : fonctionnalité non disponible', 'fa fa-duotone fa-shop', 'app_boutique')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('Missions : en cours', 'fa fa-duotone fa-user-secret', 'app_missions')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('Partenaires : en cours', 'fa fa-duotone fa-handshake', 'app_partenaires')->setPermission('ROLE_SUPERADMIN'),

            MenuItem::section('AVH'),
            MenuItem::linkToRoute('AVH Caen : fonctionnalité non disponible', 'fa fa-duotone fa-location-crosshairs', 'app_avhcaen')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('AVH Compte Rendu : fonctionnalité non disponible', 'fa fa-duotone fa-file-pen', 'app_avhcompterendu')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('AVH National : fonctionnalité non disponible', 'fa fa-duotone fa-earth-europe', 'app_avhnational')->setPermission('ROLE_SUPERADMIN'),

            MenuItem::section('Légal'),
            MenuItem::linkToRoute('FAQ : fonctionnalité non disponible', 'fa fa-duotone fa-question', 'app_faq')->setPermission('ROLE_SUPERADMIN'),
            MenuItem::linkToRoute('Législation : fonctionnalité non disponible', 'fa fa-duotone fa-scale-balanced', 'app_legislation')->setPermission('ROLE_SUPERADMIN'),
        ]);

        // yield MenuItem::linkToRoute('Guide d\'utilisation', 'fa fa-duotone fa-book', 'app_guide')->setPermission('ROLE_SUPERADMIN');
        // yield MenuItem::linkToRoute('Dashboard', 'fa fa-duotone fa-book', 'app_dashboard')->setPermission('ROLE_SUPERADMIN');
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-duotone fa-user', User::class)->setPermission('ROLE_SUPERADMIN');
        yield MenuItem::linkToLogout('Déconnexion', 'fa fa-sign-out-alt');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
