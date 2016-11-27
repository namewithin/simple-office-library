<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => ['logout', 'signin']]);
    }

    public function index()
    {
        return view('login');
    }

    /**
     * Log the user out of the application.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Auth::logout();

        if ($request->ajax()) {
            if ($request->headers->has('authorization')) {
                JWTAuth::parseToken()->invalidate();
            }

            return response()->json([]);
        }

        return redirect('/');
    }

    /**
     * Redirect to provider auth page
     *
     * @param $provider
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirectToProvider($provider = 'google')
    {
        return Socialite::with($provider)->redirect();
    }

    public function handleProviderCallback($provider = 'google')
    {
        try {
            $user = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect('login');
        }

        preg_match('/@(.+)$/', $user->email, $matches);
        if (in_array($matches[1], config('oauth2.domain'))) {
            $loginUser = User::where('email', $user->email)->first();
            //register new user
            if (!$loginUser) {
                $loginUser = new User;
                $loginUser->email = $user->email;
                $loginUser->name = $user->name;
                $loginUser->save();
            }

            return $this->login($loginUser->id);
        }

        return redirect('login');
    }

    /**
     * Log the given user ID into the application and redirect the home page.
     *
     * @param $id
     * @param bool $remember
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function login($id, $remember = false)
    {
        Auth::loginUsingId($id);

        return redirect('/');
    }

    public function signin(Request $request)
    {
        return response()->json(
            Auth::user(), 200
        );
        if (Auth::check()) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);
            $data = [];
            $meta = [];

            $data['name'] = $request->user();
            $meta['token'] = $token;

            return response()->json([
                'data' => $data,
                'meta' => $meta
            ]);
        } else {
            return response()->json([
                'error' => 'Could not authenticate',
            ], 401);
        }
    }
}


