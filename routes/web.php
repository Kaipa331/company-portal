<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/', fn() => Inertia::render('Welcome'))->name('welcome');
Route::get('/about', fn() => Inertia::render('About'))->name('about');
Route::get('/services', fn() => Inertia::render('Services'))->name('services');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');

/*
|--------------------------------------------------------------------------
| Guest Routes (login/register)
|--------------------------------------------------------------------------
*/
Route::middleware('guest')->group(function () {
    Route::get('/login', fn() => Inertia::render('Auth/Login'))->name('login');
    Route::get('/register', fn() => Inertia::render('Auth/Register'))->name('register');
});

/*
|--------------------------------------------------------------------------
| Post-login redirect (neutral entry)
|--------------------------------------------------------------------------
*/
Route::get('/home', fn() => Inertia::render('Home'))
    ->middleware(['auth', 'role.redirect'])
    ->name('home');

/*
|--------------------------------------------------------------------------
| Client Area (CLIENT ONLY)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified', 'role:client'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/projects', fn() => Inertia::render('Projects'))->name('projects');
    Route::get('/project/{id}', fn($id) => Inertia::render('ProjectDetail', ['project_id' => $id]))->name('project.detail');
    Route::get('/invoices', fn() => Inertia::render('Invoices'))->name('invoices');
    Route::get('/files', fn() => Inertia::render('Files'))->name('files');
    Route::get('/requests', fn() => Inertia::render('Requests'))->name('requests');
    Route::get('/profile', fn() => Inertia::render('Profile'))->name('profile');
});

/*
/*
|--------------------------------------------------------------------------
| Admin Area (ADMIN ONLY)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/dashboard', fn () =>
            Inertia::render('Admin/Dashboard')
        )->name('dashboard');

        Route::get('/clients', fn () =>
            Inertia::render('Admin/Clients')
        )->name('clients');

        Route::get('/projects', fn () =>
            Inertia::render('Admin/Projects')
        )->name('projects');

    });


/*
|--------------------------------------------------------------------------
| Include standard auth routes
|--------------------------------------------------------------------------
*/
require __DIR__ . '/auth.php';
