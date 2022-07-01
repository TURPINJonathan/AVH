<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GuideController extends AbstractController
{
    #[Route('/guide', name: 'app_guide')]
    public function index(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/guide.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/dashboard', name: 'app_dashboard')]
    public function dashboard(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/dashboard.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/actualites', name: 'app_actualites')]
    public function gestion(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/actualites.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/boutique', name: 'app_boutique')]
    public function boutique(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/boutique.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/missions', name: 'app_missions')]
    public function missions(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/missions.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/partenaires', name: 'app_partenaires')]
    public function partenaires(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/partenaires.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/avh/caen', name: 'app_avhcaen')]
    public function avhCaen(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/avhcaen.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/avh/compte_rendu', name: 'app_avhcompterendu')]
    public function avhCompteRendu(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/avhcompterendu.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/avh/national', name: 'app_avhnational')]
    public function avhNational(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/avhnational.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/outils/faq', name: 'app_faq')]
    public function faq(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/faq.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/outils/legislation', name: 'app_legislation')]
    public function legislation(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/legislation.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }

    #[Route('/guide/utilisateurs', name: 'app_utilisateurs')]
    public function utilisateurs(): Response
    {
        // return $this->render('guide/index.html.twig');
        return $this->render('back/guide/utilisateurs.html.twig', [
            'controller_name' => 'GuideController',
        ]);
    }
}
