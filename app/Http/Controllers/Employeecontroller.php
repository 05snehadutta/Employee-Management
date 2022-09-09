<?php

namespace App\Http\Controllers;
use App\Models\Company;
use App\Models\Employees;
use Illuminate\Http\Request;
use Redirect;

class Employeecontroller extends Controller
{
    public function index(){
  
        
        $employees= Employees::join('companies','employees.comp_id','=','companies.id')
        ->select('employees.*', 'companies.name as company_name')
        ->paginate(10);
    
        return view('employee.index',compact('employees'));
    }

    public function add(){

        $companyname= Company::select('id', 'name')->get();
        return view('employee.create',compact('companyname'));
    }

    public function store(Request $request){

        $new = new Employees;
        $new->firstname = $request['fname'];
        $new->lastname = $request['lname'];
        $new->email = $request['email'];
        $new->phoneno  = $request['phoneno'];
        $new->comp_id  = $request['category'];
        $new->save();


        return redirect()->route('employeeindex')->with(
            'success', __('successfully inserted!'));
    }

    public function edit($id){


        $data= Employees::where('id','=',$id)->first();
        $companyname= Company::select('id', 'name')->get();

        return view('employee.edit',compact('data','companyname'));
    }

    public function update(Request $request){

        $input=[
            'lastname' => $request->lname,
            'firstname' => $request->fname,
            'email' => $request->email,
            'phoneno' => $request->phoneno,
            'comp_id'=>$request->category
        ];

        Employees::where('id', $request->id)
            ->update($input);

            return redirect()->route('employeeindex')->with(
                'success', __('successfully updated!'));
    }

    public function delete($id){

        $company=Employees::where('id','=',$id)->delete();

        return redirect()->route('employeeindex')->with(
            'success', __('successfully deleted!'));
    }
}
