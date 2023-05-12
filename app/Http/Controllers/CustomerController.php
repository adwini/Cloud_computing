<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Models\customers;
use Illuminate\Http\Request;

class CustomerController extends Controller
{


    public function createCustomer(Request $request){
        
        $createBpData = $request->all(); 
        // dd($createBpData[0]['first_name']);
        $return = [];  
        $customID = customers::insertGetId($createBpData);
        // 'first_name' => $createBpData[0]['first_name'],'last_name' => 'asfasad' ],

        return compact('return','createBpData','customID');
    }


    public function updateBP(Request $request){
    
        $updateBpData = (!empty($request->get('bpDataupdate')) ? $request->get('bpDataupdate') : []);
        $bpId = (!empty($request->get('BP_ID')) ? $request->get('BP_ID') : "");

        $return = [];       
        customers::where('id',$bpId)->update($updateBpData[0]);
        return compact('return','updateBpData');

    }

    public function getBpById($bpId){
        
        $bpId = base64_decode($bpId);
        $getBpById = customers::where('id', $bpId)->get();
        
        return $getBpById;
    }

    public function getBpData(){

        $data = customers::get();

        return $data;
    }

     public function removeBpById(Request $request){
        $bpId = (!empty($request->get('BP_ID')) ? $request->get('BP_ID') : "");
        
        try{

            $getBpById = customers::where('id',$bpId)->delete();

        }catch(\Exception $e){
            Log::error($e);
            $return['error']  = true;
            $return['message'] = $e->getMessage();
        }
        
        return $getBpById;
    }
}
