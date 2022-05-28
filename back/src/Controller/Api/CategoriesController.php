<?php

namespace App\Controller\Api;

use App\Entity\Categories;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoriesController extends AbstractController
{
    #[Route('/api/categories/list', name: 'app_api_categories_list', methods: ['GET'])]
    public function categoriesList(ManagerRegistry $doctrine): Response
    {
        $AllCategories = $doctrine->getManager()->getRepository(Categories::class)->findAll();
        return $this->json($AllCategories, Response::HTTP_OK, [], ['groups' => 'categories_get']);
    }

    #[Route('/api/categories/{id}', name: 'app_api_categories_get', methods: ['GET'])]
    public function categoriesGet(ManagerRegistry $doctrine, $id): Response
    {
        $Categories = $doctrine->getManager()->getRepository(Categories::class)->find($id);
        return $this->json($Categories, Response::HTTP_OK, [], ['groups' => 'categories_get']);
    }
}
