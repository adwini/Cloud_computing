<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index(){
        return view('auth.login');
    }

   
  public function login(Request $request)
    {
            $credentials = $request->only('username', 'pass');
            $admin = Admin::where('username', $credentials['username'])->first();

            if ($admin && Hash::check($credentials['pass'], $admin->pass)) {
                return view('bizpartner.bizpartner_template');
            }

            return back()->withErrors([
                'username' => 'Something went wrong',      
            ]);

    }
    
     public function logout()
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }
  
 
}
