<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hastalar extends Model
{
    use HasFactory;

    protected $table = 'hasta';
    public $timestamps = false;

    public function takip()
    {
        return $this->belongsTo(Takip::class, 'HastaRecID', 'HastaRecID');
    }
    
}
