<?php

namespace App\Controller\Api;

use App\Entity\AvhCaen;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvhCaenController extends AbstractController
{
    #[Route('/api/avhcaen/list', name: 'app_api_avhcaen_list', methods: ['GET'])]
    public function avhCaenList(ManagerRegistry $doctrine): Response
    {
        $AllAvhCaen = $doctrine->getManager()->getRepository(AvhCaen::class)->findAll();
        return $this->json($AllAvhCaen, Response::HTTP_OK, [], ['groups' => 'AvhCaen_get']);
    }

    #[Route('/api/avhcaen/{id}', name: 'app_api_avhcaen_get', methods: ['GET'])]
    public function avhCaenGet(ManagerRegistry $doctrine, $id): Response
    {
        $AvhCaen = $doctrine->getManager()->getRepository(AvhCaen::class)->find($id);
        return $this->json($AvhCaen, Response::HTTP_OK, [], ['groups' => 'AvhCaen_get']);
    }
}
