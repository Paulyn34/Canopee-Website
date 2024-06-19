<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PriceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PriceRepository::class)]
#[ApiResource()]
class Price
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $category = null;

   

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    private ?string $price_activity = null;

    #[ORM\Column(length: 255)]
    private ?string $name_activity = null;

    public function getId(): ?int
    {
        return $this->id;
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

    

    public function getPriceActivity(): ?string
    {
        return $this->price_activity;
    }

    public function setPriceActivity(string $price_activity): static
    {
        $this->price_activity = $price_activity;

        return $this;
    }

    public function getNameActivity(): ?string
    {
        return $this->name_activity;
    }

    public function setNameActivity(string $name_activity): static
    {
        $this->name_activity = $name_activity;

        return $this;
    }
}
