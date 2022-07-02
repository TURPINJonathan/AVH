<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UpdateController extends AbstractController
{
    #[Route('/update/2022/juillet', name: 'app_juillet2022')]
    public function juillet22(): Response
    {
        return $this->render('update/2022/juillet.html.twig', [
            'controller_name' => 'UpdateController',
        ]);
    }

    #[Route('/update/2022/juin', name: 'app_juin2022')]
    public function juin2022(): Response
    {
        return $this->render('update/2022/juin.html.twig', [
            'controller_name' => 'UpdateController',
        ]);
    }
}
