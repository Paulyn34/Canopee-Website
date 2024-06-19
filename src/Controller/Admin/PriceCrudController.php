<?php

namespace App\Controller\Admin;

use App\Entity\Price;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PriceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Price::class;
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
        $fields =[];

        $name =TextField::new('name_activity',"Nom de la prestation proposée");
        $category =TextField::new('category',"Nom de la catégorie à laquelle appartient cette prestation");
        $price=TextField::new('price_activity',"Tarif de la prestation proposée");
        $fields[]=$name;
        $fields[]=$category;
        $fields[]=$price;
        return $fields;

    }
}
