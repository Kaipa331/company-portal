<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'address',
    ];

    /*
    |--------------------------------------------------------------------------
    | Relationships (optional but recommended)
    |--------------------------------------------------------------------------
    */

    // If a client can have many projects
    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
