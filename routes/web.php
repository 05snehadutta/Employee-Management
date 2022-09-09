<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Route::prefix('admin')->group(function () {
    // Route::get('/companies', 'Company@index')->name('index');
    Route::get('/companies', 'App\Http\Controllers\CompanyController@index')->name('index');
    Route::get('/companies/add', 'App\Http\Controllers\CompanyController@add')->name('add');
    Route::post('/companies/store', 'App\Http\Controllers\CompanyController@store')->name('store');
    Route::get('/companies/edit/{id}', 'App\Http\Controllers\CompanyController@edit')->name('companiesedit');
    Route::post('/companies/update', 'App\Http\Controllers\CompanyController@update')->name('update');
    Route::get('/companies/delete/{id}', 'App\Http\Controllers\CompanyController@delete')->name('delete');

    //employee
    Route::get('/employee', 'App\Http\Controllers\Employeecontroller@index')->name('employeeindex');
    Route::get('/employee/add', 'App\Http\Controllers\Employeecontroller@add')->name('employeeadd');
    Route::post('/employee/store', 'App\Http\Controllers\Employeecontroller@store')->name('store');
    Route::get('/employee/edit/{id}', 'App\Http\Controllers\Employeecontroller@edit')->name('edit');
    Route::post('/employee/update', 'App\Http\Controllers\Employeecontroller@update')->name('employeeupdate');
    Route::get('/employee/delete/{id}', 'App\Http\Controllers\Employeecontroller@delete')->name('employeedelete');
    

});

