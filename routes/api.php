<?php


Route::group([
    'middleware' => ['jwt.header', 'jwt.auth']
], function () {

    Route::resource('book/request', 'BookRequestController');

    Route::resource('book', 'BookController');

});

Route::group([
//    'middleware' => ['auth']
], function () {
    Route::post('upload', 'FileController@upload');
});