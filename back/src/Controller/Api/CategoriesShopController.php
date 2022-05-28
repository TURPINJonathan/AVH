<?php

namespace App\Controller\Api;

use App\Entity\CategoriesShop;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoriesShopController extends AbstractController
{
    #[Route('/api/categoriesShop/list', name: 'app_api_categoriesShop_list', methods: ['GET'])]
    public function avhCaenList(ManagerRegistry $doctrine): Response
    {
        $AllCategoriesShop = $doctrine->getManager()->getRepository(CategoriesShop::class)->findAll();
        return $this->json($AllCategoriesShop, Response::HTTP_OK, [], ['groups' => 'CategoriesShop_get']);
    }

    #[Route('/api/categoriesShop/{id}', name: 'app_api_categoriesShop_get', methods: ['GET'])]
    public function avhCaenGet(ManagerRegistry $doctrine, $id): Response
    {
        $CategoriesShop = $doctrine->getManager()->getRepository(CategoriesShop::class)->find($id);
        return $this->json($CategoriesShop, Response::HTTP_OK, [], ['groups' => 'CategoriesShop_get']);
    }
}
