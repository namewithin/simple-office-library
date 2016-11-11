<?php

$factory->define(App\Book::class, function (Faker\Generator $faker) {
    return [
        'name'         => $faker->sentence,
        'description'  => $faker->paragraph,
        'requested_at' => $faker->dateTime
    ];
});
