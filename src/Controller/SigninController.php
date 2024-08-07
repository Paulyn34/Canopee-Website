<?php

namespace App\Controller;


use App\Entity\User;
use App\Form\SigninType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SigninController extends AbstractController
{
    #[Route('/signin', name: 'app_signin')]
    public function index(Request $req, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {

        $user = new User();
        $form = $this-> createForm(SigninType::class,$user);
        $form->handleRequest($req);
        if ($form->isSubmitted()&&$form->isValid()){
            $user =$form->getData();
            $plaintextPassword = $user ->getPassword();
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );
            $user ->setPassword($hashedPassword);

            $entityManager ->persist ($user);
            $entityManager->flush();
            //afficher un message pour dire que l'inscription a été faite
            //return $this->render();
          
        }

        return $this->render('signin/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
