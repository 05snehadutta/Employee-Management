<?php

namespace App\Http\Controllers;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index(){

        $companies=Company::paginate(10);
        return view('company.index',compact('companies'));

    }

    public function add(){

        return view('company.create');
    }

    public function store(Request $request){
 
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'website'=>'required',
            'image' => 'required'
        ]);

        
        $file= $request->file('image')->getClientOriginalName();
        $filename= date('YmdHi').$file;

        // $request->image->storeAs('public/images/', $filename);
       
     
        $request->image->move(public_path('assets/images'), $filename);

        $new = new Company;
        $new->name = $request->name;
        $new->email = $request->email;
        $new->website = $request->website;
        $new->image = $filename;
        $new->save();
        

        return redirect()->route('index')->with(
            'success', __('successfully created!'));
    }

    public function edit($id){
  
        $company=Company::where('id','=',$id)->first();

        return view('company.edit',compact('company'));
    }

    public function update(Request $request){

        $file= $request->file('image');
        $filename= date('YmdHi').$file->getClientOriginalName();

        // $request->image->storeAs('\images', $filename);
        $request->image->move(public_path('assets/images'), $filename);

        $input=[
            'name' => $request->name,
            'email' => $request->email,
            'website'=>$request->website,
            'image'=>$filename
        ];

        Company::where('id', $request->id)
            ->update($input);

            return redirect()->route('index')->with(
                'success', __('successfully updated!'));
    }

    public function delete($id){

        $company=Company::where('id','=',$id)->delete();

        return redirect()->route('index');
    }
}
