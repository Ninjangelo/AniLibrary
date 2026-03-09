<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Anime;

class AnimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = fopen(storage_path('app/anime-list-cleaned.csv'), "r");

        $firstline = true;

        while (($data = fgetcsv($csvFile, 5000, ",")) !== FALSE) {

            if ($firstline) {
                Anime::create([
                    'name'                    => $data[1],
                    'studio'                  => $data[2],
                    'theme'                   => $data[3],
                    'tags'                    => $data[4],
                    'source'                  => $data[5],
                    'rating'                  => is_numeric($data[6]) ? $data[6] : null,
                    'year'                    => is_numeric($data[7]) ? $data[7] : null,
                    'synopsis'                => $data[8],
                    'demographic'             => $data[9],
                    'status'                  => $data[10],
                    'eps'                     => is_numeric($data[11]) ? $data[11] : null,
                    'eps_avg_duration_in_min' => is_numeric($data[12]) ? $data[12] : null,
                    'rated_by'                => is_numeric($data[13]) ? $data[13] : null,
                ])
            }
        }
    }
}
