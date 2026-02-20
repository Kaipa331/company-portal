<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Check if user is logged in and has role 'admin'
        if (!Auth::check() || Auth::user()->role !== 'admin') {
            // Redirect non-admin users
            return redirect()->route('dashboard');
        }

        return $next($request);
    }
}
