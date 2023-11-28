<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
          Admin::create([
            'username' => 'Admin',
            'pass' => Hash::make('AdminACLC'),
        ]);
    }
}
