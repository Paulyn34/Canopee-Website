<?php

namespace App\Controller\Admin;

use App\Entity\Message;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class MessageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Message::class;
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
        $name =TextField::new('name',"Nom de l'expéditeur");
        $email =TextField::new('email',"Adresse Email de l'expéditeur");
        $phone=TextField::new('phone', "Numéro de téléphone de l'expéditeur");
        $text=TextEditorField::new('text', 'Présentation');
        $fields[]=$name;
        $fields[]=$email;
        $fields[]=$phone;
        $fields[]=$text;
        return $fields;

    }


}
