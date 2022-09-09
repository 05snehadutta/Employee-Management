<?php

namespace App\Http\Controllers;
use App\Models\Company;
use Illuminate\Http\Request;


class Company extends Controller
{
    public function index(){
  
        // die("hello");
        $countries=[];
        return view('company.index',compact('countries'));
    }

    public function add(){

        return view('company.create');
    }

    public function store(Request $request){

        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'image' => 'required'
        ]);

        $new = new Company;
        $new->name = $request->name;
        $new->email = $request->email;
        $new->image = $request->image;

        // print_r($new);
        // die("new");
        $new->save();
        
        return redirect('index');
    }
}
