<?php

namespace App\Http\Controllers;

use App\BookRequest;
use App\Http\Requests\BookRequestRequest;
use Illuminate\Contracts\Logging\Log;
use Illuminate\Support\Facades\Auth;

class BookRequestController extends Controller
{
    public function store(BookRequestRequest $request)
    {
        $bookRequest = new BookRequest();
        $bookRequest->fill($request->get('data'));
        $bookRequest->user_id = Auth::user()->id;

        try {
            $bookRequest->save();
        } catch (\Exception $e) {
            Log::error('couldnt save.' . $e);
        }


        return response()->json($request->all(), 200);
    }
}
