<?php

namespace App\Controller\Admin;

use App\Entity\Performance;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;

use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class PerformanceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Performance::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
    public function configureFields(string $pageName): iterable
    {
        $fields =[
            ImageField::new('photo_modal1',"Photo 1 de la modale")
                ->setBasePAth('uploads/')
                ->setUploadDir('public/uploads')
                ->setUploadedFileNamePattern('[randomhash].png')
                ->setRequired(true)
        ,

       
            ImageField::new('photomodal2',"Photo 2 de la modale")
                ->setBasePAth('uploads/')
                ->setUploadDir('public/uploads')
                ->setUploadedFileNamePattern('[randomhash].png')
                ->setRequired(true)
        ,
            ImageField::new('main_photo',"Photo principale de la prestation")
                ->setBasePAth('uploads/')
                ->setUploadDir('public/uploads')
                ->setUploadedFileNamePattern('[randomhash].png')
                ->setRequired(true)
        ];
        $title =TextField::new('title',"Texte de la modale");
        $category =TextField::new('category',"Catégorie de la prestation");
        $fields[]=$title;
        $fields[]=$category;
       
       

        return $fields;

    }
}
