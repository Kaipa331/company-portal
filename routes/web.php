<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\ConsultationController; // ✅ THIS WAS MISSING


/*
|--------------------------------------------------------------------------
| Public Routes (no login required)
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'stats' => [
            'projects' => 50,   // fake/test value – change later to real count
            'clients'  => 120,
        ],
        'projects' => [],       // empty for now, or fetch real: Project::latest()->take(3)->get()
    ]);
})->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');

/* Consultation form submit */
Route::post('/consultation', [ConsultationController::class, 'store'])
    ->name('consultation.store');


/*
|--------------------------------------------------------------------------
| Authentication Routes (public pages only)
|--------------------------------------------------------------------------
*/

Route::get('/login', fn () => Inertia::render('Auth/Login'))->name('login');
Route::get('/register', fn () => Inertia::render('Auth/Register'))->name('register');


/*
|--------------------------------------------------------------------------
| Client Portal – Requires login + email verification
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('/projects', fn () => Inertia::render('Projects'))->name('projects');

    Route::get('/project/{id}', fn ($id) =>
        Inertia::render('ProjectDetail', ['project_id' => $id])
    )->name('project.detail');

    Route::get('/invoices', fn () => Inertia::render('Invoices'))->name('invoices');
    Route::get('/files', fn () => Inertia::render('Files'))->name('files');
    Route::get('/requests', fn () => Inertia::render('Requests'))->name('requests');
    Route::get('/profile', fn () => Inertia::render('Profile'))->name('profile');

    /* Logout (production safe version) */
    Route::post('/logout', function () {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/');
    })->name('logout');
});


/*
|--------------------------------------------------------------------------
| ADMIN AREA – Requires login + admin middleware
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified', 'admin'])
    ->prefix('admin')
    ->group(function () {

        Route::get('/', fn () => Inertia::render('Admin/Dashboard'))
            ->name('admin.dashboard');

        /* Projects CRUD */
        Route::get('/projects', [ProjectController::class, 'index'])->name('admin.projects.index');
        Route::post('/projects', [ProjectController::class, 'store'])->name('admin.projects.store');
        Route::put('/projects/{project}', [ProjectController::class, 'update'])->name('admin.projects.update');
        Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('admin.projects.destroy');

        /* Messages CRUD */
        Route::get('/messages', [MessageController::class, 'index'])->name('admin.messages.index');
        Route::delete('/messages/{message}', [MessageController::class, 'destroy'])->name('admin.messages.destroy');

        /* Clients resource */
        Route::resource('clients', ClientController::class, ['as' => 'admin']);
});


require __DIR__.'/auth.php';
