<?php

use App\Http\Controllers\CustomerController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('bizpartner/bizpartner_template');
});

// Route::post('/removeDataById', [CustomerController::class, 'removeBpById']);
// Route::post('/create_data', [CustomerController::class, 'createCustomer']);
// Route::post('/update_data', [CustomerController::class, 'updateBP']);
// Route::get('/getDataById/{id}', [CustomerController::class, 'getBpById']);
// Route::get('/getBpData', [CustomerController::class, 'getBpData']);


Route::controller(CustomerController::class)->group(function () {
    Route::get('/getDataById/{id}', 'getBpById');
    Route::get('/getBpData', 'getBpData');
    Route::post('/create_data', 'createCustomer');
    Route::post('/update_data', 'updateBP');
    Route::post('/removeDataById', 'removeBpById');

});