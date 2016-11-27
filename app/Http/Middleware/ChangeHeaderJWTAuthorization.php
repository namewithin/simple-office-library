<?php
/**
 * Created by PhpStorm.
 * User: namewithin
 * Date: 27.11.16
 * Time: 14:55
 */

namespace App\Http\Middleware;

use Closure;

class ChangeHeaderJWTAuthorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->headers->set('Authorization', $request->headers->get('JWTAuthorization'));

        return $next($request);
    }
}
