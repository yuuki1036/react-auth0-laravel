<?php

use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function () {
    Route::get('post/get/public', [PostController::class, 'getPublicAll']);
    Route::get('post/get/private', [PostController::class, 'getPrivateAll']);
    Route::post('post/create', [PostController::class, 'create']);
    Route::post('post/create/retweet', [PostController::class, 'retweet']);
    Route::post('post/create/replay', [PostController::class, 'replay']);
    Route::post('post/reload', [PostController::class, 'reload']);
    Route::post('post/update/likes/u', [PostController::class, 'updateLikesUp']);
    Route::post('post/update/likes/d', [PostController::class, 'updateLikesDown']);
});
