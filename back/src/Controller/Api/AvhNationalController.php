<?php

namespace App\Controller\Api;

use App\Entity\AvhNational;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvhNationalController extends AbstractController
{
    #[Route('/api/avhNational/list', name: 'app_api_avhNational_list', methods: ['GET'])]
    public function avhNationalList(ManagerRegistry $doctrine): Response
    {
        $AllAvhNational = $doctrine->getManager()->getRepository(AvhNational::class)->findAll();
        return $this->json($AllAvhNational, Response::HTTP_OK, [], ['groups' => 'AvhNational_get']);
    }

    #[Route('/api/avhNational/{id}', name: 'app_api_avhNational_get', methods: ['GET'])]
    public function avhNationalGet(ManagerRegistry $doctrine, $id): Response
    {
        $AvhNational = $doctrine->getManager()->getRepository(AvhNational::class)->find($id);
        return $this->json($AvhNational, Response::HTTP_OK, [], ['groups' => 'AvhNational_get']);
    }
}
