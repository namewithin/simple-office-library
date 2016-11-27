<?php


Route::group([
    'middleware' => ['jwt.header', 'jwt.auth']
], function () {
    Route::post('upload', 'FileController@upload');

    Route::resource('book/request', 'BookRequestController');

    Route::resource('book', 'BookController');

});