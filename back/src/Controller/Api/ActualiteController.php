<?php

namespace App\Controller\Api;

use App\Entity\Actualite;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ActualiteController extends AbstractController
{
    #[Route('/api/actualite/list', name: 'app_api_actualite_list', methods: ['GET'])]
    public function actualitesList(ManagerRegistry $doctrine): Response
    {
        $AllActualites = $doctrine->getManager()->getRepository(Actualite::class)->findAll();
        return $this->json($AllActualites, Response::HTTP_OK, [], ['groups' => 'Actualite_get']);
    }

    #[Route('/api/actualite/{id}', name: 'app_api_actualite_get', methods: ['GET'])]
    public function actualiteGet(ManagerRegistry $doctrine, $id): Response
    {
        $Actualite = $doctrine->getManager()->getRepository(Actualite::class)->find($id);
        return $this->json($Actualite, Response::HTTP_OK, [], ['groups' => 'Actualite_get']);
    }

}
