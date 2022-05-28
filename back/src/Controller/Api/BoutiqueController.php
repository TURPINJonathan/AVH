<?php

namespace App\Controller\Api;

use App\Entity\Boutique;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BoutiqueController extends AbstractController
{
    #[Route('/api/boutique/list', name: 'app_api_boutique_list', methods: ['GET'])]
    public function boutiqueList(ManagerRegistry $doctrine): Response
    {
        $AllBoutique = $doctrine->getManager()->getRepository(Boutique::class)->findAll();
        return $this->json($AllBoutique, Response::HTTP_OK, [], ['groups' => 'boutique_get']);
    }

    #[Route('/api/boutique/{id}', name: 'app_api_boutique_get', methods: ['GET'])]
    public function boutiqueGet(ManagerRegistry $doctrine, $id): Response
    {
        $Boutique = $doctrine->getManager()->getRepository(Boutique::class)->find($id);
        return $this->json($Boutique, Response::HTTP_OK, [], ['groups' => 'boutique_get']);
    }
}
