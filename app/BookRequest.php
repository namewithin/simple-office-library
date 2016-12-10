<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookRequest extends Model
{
    protected $fillable = ['title', 'author', 'user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
