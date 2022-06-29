<?php

namespace App\Controller\Api;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
// {
//     #[Route('/api/user', name: 'app_api_user')]
//     public function index(): Response
//     {
//         return $this->json([
//             'message' => 'Welcome to your new controller!',
//             'path' => 'src/Controller/Api/UserController.php',
//         ]);
//     }
// }

{
    #[Route('/api/user/list', name: 'app_api_user_list', methods: ['GET'])]
    public function actualitesList(ManagerRegistry $doctrine): Response
    {
        $AllUsers = $doctrine->getManager()->getRepository(User::class)->findAll();
        return $this->json($AllUsers, Response::HTTP_OK, [], ['groups' => 'User_get']);
    }

    #[Route('/api/user/{id}', name: 'app_api_user_get', methods: ['GET'])]
    public function actualiteGet(ManagerRegistry $doctrine, $id): Response
    {
        $User = $doctrine->getManager()->getRepository(User::class)->find($id);
        return $this->json($User, Response::HTTP_OK, [], ['groups' => 'User_get']);
    }
}
