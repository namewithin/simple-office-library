<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    protected $auth;

    public function __construct(Guard $auth)
    {
        $this->auth = $auth;

    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @param Request $request
     * @return Response
     */
    public function handleProviderCallback()
    {
        if (Auth::user()) {
            return redirect('/');
        }
        $oauthUser = Socialite::driver('google')->user();
        preg_match('/@(.+)$/', $oauthUser->email, $matches);
        if (in_array($matches[1], config('auth.trusted_domains'))) {
            $user = User::where('email', $oauthUser->email)->first();
            if (!$user) {
                $user = new User;
                $user->email = $oauthUser->email;
                $user->name = $oauthUser->name;
                $user->save();
            }

            $this->login($user->id, true);
        }

        return redirect('/');
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
        $this->auth->loginUsingId($id, $remember);

        return redirect('#/books');
    }

    public function signin(Request $request)
    {
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

    /**
     * Log the user out of the application.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}
