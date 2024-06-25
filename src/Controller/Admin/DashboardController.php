<?php

namespace App\Controller\Admin;
use App\Entity\Message;
use App\Entity\Partner;
use App\Entity\Performance;
use App\Entity\Presentation;
use App\Entity\Price;
use App\Entity\Slide;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
//va permettre de générer des url dans notre administration pour pouvoir personnaliser les pages qui s'affichent
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        //return parent::index();

        //ouvre la page administrateur sur les messages postés
         $routeBuilder=$this->container->get(AdminUrlGenerator::class);
         $url =$routeBuilder->setController(MessageCrudController::class)->generateUrl();
         return $this->redirect ($url);


        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        // $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        // return $this->redirect($adminUrlGenerator->setController(OneOfYourCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration Canopee Website');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
        yield MenuItem::linkToCrud('Messages', 'fa fa-commenting-o', Message::class);
        yield MenuItem::linkToCrud('Profil Administrateurs', 'fa fa-user-circle', User::class);
        yield MenuItem::linkToCrud('Présentation des associés', 'fa fa-user-circle', Partner::class);
        yield MenuItem::linkToCrud('Présentation de différentes prestations', 'fa fa-picture-o', Performance::class);
        yield MenuItem::linkToCrud('Presentation de chaque page', 'fa fa-file-text', Presentation::class);
        yield MenuItem::linkToCrud('Photos du Slide', 'fa fa-camera', Slide::class);
        yield MenuItem::linkToCrud('Prix de chacune des prestations', 'fa fa-eur', Price::class);
    }
}
