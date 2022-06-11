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
    #[Security("is_granted('ROLE_SUPERADMIN') or is_granted('ROLE_ADMIN') or is_granted('ROLE_MODERATEUR')")]
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
        yield MenuItem::linkToDashboard('Accueil', 'fa fa-home');
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-duotone fa-user', User::class)->setPermission('ROLE_SUPERADMIN');
        yield MenuItem::linkToCrud('Actualités', 'fa fa-newspaper', Actualite::class);
        yield MenuItem::linkToCrud('Boutique', 'fa fa-duotone fa-shop', Boutique::class);
        yield MenuItem::linkToCrud('Missions', 'fa fa-duotone fa-user-secret', Mission::class);
        yield MenuItem::linkToCrud('Partenaires', 'fa fa-duotone fa-handshake', Partenaire::class);
        yield MenuItem::linkToCrud('AVH Caen', 'fa fa-duotone fa-location-crosshairs', AvhCaen::class);
        yield MenuItem::linkToCrud('AVH Compte Rendu', 'fa fa-duotone fa-file-pen', AvhCompteRendu::class);
        yield MenuItem::linkToCrud('AVH National', 'fa fa-duotone fa-earth-europe', AvhNational::class);
        yield MenuItem::linkToCrud('FAQ', 'fa fa-duotone fa-question', Faq::class);
        yield MenuItem::linkToCrud('Législation', 'fa fa-duotone fa-scale-balanced', Legal::class);

        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
