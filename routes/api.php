<?php

use Illuminate\Http\Request;

Route::resource('book', 'BookController');

Route::post('upload', 'FileController@upload');
