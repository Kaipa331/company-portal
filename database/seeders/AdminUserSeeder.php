<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin only if it does not already exist
        User::firstOrCreate(
            ['email' => 'kaipap33@gmail.com'], // Unique identifier for the admin user
            [
                'name' => 'Precious Kaipa',
                'password' => Hash::make('Kaipa123P'),
                'role' => 'admin',
            ]
        );
    }
}
