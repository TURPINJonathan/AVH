<?php

namespace App\Controller\Api;

use App\Entity\Faq;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FaqController extends AbstractController
{
    #[Route('/api/faq/list', name: 'app_api_faq_list', methods: ['GET'])]
    public function avhCaenList(ManagerRegistry $doctrine): Response
    {
        $AllFaq = $doctrine->getManager()->getRepository(Faq::class)->findAll();
        return $this->json($AllFaq, Response::HTTP_OK, [], ['groups' => 'Faq_get']);
    }

    #[Route('/api/faq/{id}', name: 'app_api_faq_get', methods: ['GET'])]
    public function avhCaenGet(ManagerRegistry $doctrine, $id): Response
    {
        $Faq = $doctrine->getManager()->getRepository(Faq::class)->find($id);
        return $this->json($Faq, Response::HTTP_OK, [], ['groups' => 'Faq_get']);
    }
}
