<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TestClientSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Test Client Precious',
            'email' => 'testclient@tmconsultancy.mw',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);

        // Add more test users if needed
        User::create([
            'name' => 'Another Client',
            'email' => 'another@tmconsultancy.mw',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);

        echo "Test clients created!\n";
    }
}