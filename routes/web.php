<?php

use App\Http\Controllers\Home\HomePageController;
use App\Http\Controllers\Dashboard\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomePageController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class,'index'])->name('dashboard');

    
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
