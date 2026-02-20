<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Messages', [
            'messages' => Message::latest()->get()
        ]);
    }

    public function destroy(Message $message)
    {
        $message->delete();

        return back();
    }
}
