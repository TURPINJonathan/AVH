<?php

namespace App\Controller\Api;

use App\Entity\Partenaire;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PartenaireController extends AbstractController
{
    #[Route('/api/partenaire/list', name: 'app_api_partenaire_list', methods: ['GET'])]
    public function avhCaenList(ManagerRegistry $doctrine): Response
    {
        $AllPartenaire = $doctrine->getManager()->getRepository(Partenaire::class)->findAll();
        return $this->json($AllPartenaire, Response::HTTP_OK, [], ['groups' => 'Partenaire_get']);
    }

    #[Route('/api/partenaire/{id}', name: 'app_api_partenaire_get', methods: ['GET'])]
    public function avhCaenGet(ManagerRegistry $doctrine, $id): Response
    {
        $Partenaire = $doctrine->getManager()->getRepository(Partenaire::class)->find($id);
        return $this->json($Partenaire, Response::HTTP_OK, [], ['groups' => 'Partenaire_get']);
    }
}
