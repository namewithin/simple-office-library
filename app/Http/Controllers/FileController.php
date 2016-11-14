<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        $path = $request->file('avatar')->storePublicly('avatars', 'public');
        $result['path'] = $path;
        $result['filename'] = $request->file('avatar')->getFilename();
        $result['url'] = Storage::url($path);

        return $result;

    }
}
