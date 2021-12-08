<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Takip extends Model
{
    use HasFactory;
    protected $table = 'takip';
    public $timestamps = false;
}
