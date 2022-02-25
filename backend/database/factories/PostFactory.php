<?php

namespace Database\Factories;

use Carbon\Carbon;
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
        $name = $this->faker->name;
        $userName = strtolower(implode(".", explode(" " ,$name)));
        $date = Carbon::today()->subDays(rand(0, 365))->subHours(rand(0, 23)) ->subMinutes(rand(0, 59))->subSeconds(rand(0, 59));
      return [
        "userId"  => $this->faker->uuid,
        "displayName" => $name,
        "userName" => $userName,
        "emailVerified" => false,
        "avatar" => "",
        "type" => "tweet",
        "public" => true,
        "content" => $this->faker->text(100),
        "image" => null,
        "replay"   => 0,
        "retweet"   => 0,
        "likes"   => 0,
        "replayIds" => "",
        "retweetIds" => "",
        "likesIds" => "",
        "replayTo" => 0,
        "retweetBy" => "",
        "created_at" => $date,
        "updated_at" => $date,
    ];
    }
}
