<?php

namespace App\Http\Controllers;

use App\BookRequest;
use App\Http\Requests\BookRequestRequest;
use Carbon\Carbon;
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
            Log::error($e);
        }

        return response()->json($request->all(), 200);
    }

    public function index()
    {
        return BookRequest::with('user')->paginate(20);
    }

    public function destroy($id)
    {
        BookRequest::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
