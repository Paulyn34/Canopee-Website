<?php

namespace App\Entity;

use App\Repository\PerformanceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PerformanceRepository::class)]
class Performance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    private ?string $photo_modal1 = null;

    #[ORM\Column(length: 255)]
    private ?string $photomodal2 = null;

    #[ORM\Column(length: 255)]
    private ?string $category = null;

    

    #[ORM\Column(length: 255)]
    private ?string $main_photo = null;

   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getPhotoModal1(): ?string
    {
        return $this->photo_modal1;
    }

    public function setPhotoModal1(string $photo_modal1): static
    {
        $this->photo_modal1 = $photo_modal1;

        return $this;
    }

    public function getPhotomodal2(): ?string
    {
        return $this->photomodal2;
    }

    public function setPhotomodal2(string $photomodal2): static
    {
        $this->photomodal2 = $photomodal2;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;

        return $this;
    }

   
   

    public function getMainPhoto(): ?string
    {
        return $this->main_photo;
    }

    public function setMainPhoto(string $main_photo): static
    {
        $this->main_photo = $main_photo;

        return $this;
    }

    
}
