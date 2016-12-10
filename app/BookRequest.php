<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookRequest extends Model
{
    use SoftDeletes;
    protected $fillable = ['title', 'author', 'user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
