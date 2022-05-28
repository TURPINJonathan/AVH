<?php

namespace App\Controller\Api;

use App\Entity\AvhCompteRendu;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvhCompteRenduController extends AbstractController
{
    #[Route('/api/compteRendu/list', name: 'app_api_compterendu_list', methods: ['GET'])]
    public function compteRenduList(ManagerRegistry $doctrine): Response
    {
        $AllCompteRendu = $doctrine->getManager()->getRepository(AvhCompteRendu::class)->findAll();
        return $this->json($AllCompteRendu, Response::HTTP_OK, [], ['groups' => 'CompteRendu_get']);
    }

    #[Route('/api/compteRendu/{id}', name: 'app_api_compterendu_get', methods: ['GET'])]
    public function compteRenduGet(ManagerRegistry $doctrine, $id): Response
    {
        $CompteRendu = $doctrine->getManager()->getRepository(AvhCompteRendu::class)->find($id);
        return $this->json($CompteRendu, Response::HTTP_OK, [], ['groups' => 'CompteRendu_get']);
    }
}
