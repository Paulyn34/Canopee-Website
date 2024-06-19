<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class SigninType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        //personnalisation du formulaire ici ;
            ->add('email', EmailType::class, [
                'label'=>'E-mail',
                'attr'=>[
                        'placeholder'=>'Veuillez saisir votre email'
                ]
            ]) 
            //suppression de add ('roles'), pour ne pas laisser la possibilité au User de choisir son rôle
            //->add('roles')
            ->add('password',PasswordType::class, [
                'label'=>'Mot de passe',
                'attr'=>[
                        'placeholder'=>'Veuillez saisir votre mot de passe'
                ]
            ])
            ->add('submit',SubmitType::class, [
                'label'=>'Valider',
                ]
            )






        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
