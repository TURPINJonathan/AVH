<?php

namespace App\Controller\Api;

use App\Entity\Mission;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MissionController extends AbstractController
{
    #[Route('/api/mission/list', name: 'app_api_mission_list', methods: ['GET'])]
    public function avhCaenList(ManagerRegistry $doctrine): Response
    {
        $AllMission = $doctrine->getManager()->getRepository(Mission::class)->findAll();
        return $this->json($AllMission, Response::HTTP_OK, [], ['groups' => 'Mission_get']);
    }

    #[Route('/api/mission/{id}', name: 'app_api_mission_get', methods: ['GET'])]
    public function avhCaenGet(ManagerRegistry $doctrine, $id): Response
    {
        $Mission = $doctrine->getManager()->getRepository(Mission::class)->find($id);
        return $this->json($Mission, Response::HTTP_OK, [], ['groups' => 'Mission_get']);
    }
}
