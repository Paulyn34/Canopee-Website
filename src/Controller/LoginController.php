<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
//gestion de l'authentification
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {

        //vérification des erreurs
        $error =$authenticationUtils->getLastAuthenticationError();


        //recuperation du userName=email
        $lastUsername=$authenticationUtils->getLastUsername();


        return $this->render('login/index.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
    
    
    #[Route('/logout', name: 'app_logout')]
    public function logout()
    {
        $error="";
        $lastUsername="";
        return $this->render('login/index.html.twig', [
         'last_username' => $lastUsername,
         'error' => $error,
        ]);;
    }
}