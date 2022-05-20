<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AvhCompteRenduController extends AbstractController
{
    #[Route('/avh/compte/rendu', name: 'app_avh_compte_rendu')]
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AvhCompteRenduController.php',
        ]);
    }
}
