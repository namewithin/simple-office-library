<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function pictures()
    {
        return $this->hasMany(Picture::class);
    }
}
