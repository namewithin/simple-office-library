<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//oAuth
Route::get('auth', 'Auth\AuthController@redirectToProvider');
Route::get('auth/callback', 'Auth\AuthController@handleProviderCallback');
Route::get('login', function () {
    return view('login');
});
Route::get('logout', 'Auth\AuthController@logout');

Route::get('/', function () {
    return view('welcome');
})->middleware(['auth']);

Route::get('/auth/user', function () {
    return [
        'name'  => 'leo',
        'email' => 'leo@pdffiller.com'
    ];
});