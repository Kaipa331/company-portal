<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

        $middleware->alias([

            /*
            |--------------------------------------------------------------------------
            | Authentication Middleware
            |--------------------------------------------------------------------------
            */
            'auth' => \App\Http\Middleware\Authenticate::class,
            'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
            'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
            'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
            'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,

            /*
            |--------------------------------------------------------------------------
            | Authorization & Security Middleware
            |--------------------------------------------------------------------------
            */
            'can' => \Illuminate\Auth\Middleware\Authorize::class,
            'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
            'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
            'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
            'precognitive' => \Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests::class,

            /*
            |--------------------------------------------------------------------------
            | Custom Role Middleware
            |--------------------------------------------------------------------------
            */
            'role.redirect' => \App\Http\Middleware\RedirectBasedOnRole::class,
            'role' => \App\Http\Middleware\RoleMiddleware::class,
            
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();
