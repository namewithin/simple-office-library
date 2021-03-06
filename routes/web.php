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

Route::get('signin', 'Auth\AuthController@signin');
//oAuth
Route::get('login', function () {
    return view('login');
});
Route::get('logout', 'Auth\AuthController@logout');
Route::get('auth/callback', 'Auth\AuthController@handleProviderCallback');
Route::get('auth', 'Auth\AuthController@redirectToProvider');


Route::get('/', function () {
    return view('welcome');
})->middleware(['auth']);