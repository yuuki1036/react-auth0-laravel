<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
      return [
        "userId"  => $this->faker->numberBetween(1, 100),
        "userName" => $this->faker->userName(),
        "content" => $this->faker->realText(20),
        "type" => "tweet",
        "replay"   => 0,
        "retweet"   => 0, 
        "likes"   => 0,
        "replayIds" => "{}",
        "retweetIds" => "{}",
        "likesIds" => "{}",
    ];
    }
}
