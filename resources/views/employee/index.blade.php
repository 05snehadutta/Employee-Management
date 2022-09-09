@extends('layouts.main')
<x-app-layout>
    <x-slot name="header">
        
    </x-slot>
</x-app-layout>

@section('content')

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Employee Database</h1>
    </div>
    <div class="row">
        <div class="card  mx-auto">
          <div>
            @if (session()->has('message'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>{{ session('message')}}</strong>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
            @endif
          </div>
            <div class="card-header">
                <div class="row">
                
                <div class="col-md-4 text-center" >No of Employees {{$employees->count()}}</div>
                <div class="col-md-4 text-center" style="font-size: 18px; color: brown;">Employee List</div>
                <div class="col-md-4 text-center"> <a href="{{ route('employeeadd') }}" class="btn btn-primary mb-2" style="font-size: 11px;">Create</a></div>
            
                    
                </div>
            </div>
            <div class="card-body">

            <div class="col-md-12">
                <div class="" style="margin: 10px 11%;">
                <a href="{{$employees->previousPageUrl()}}" class="btn btn-secondary" style="font-size: 11px;">Previous</a>
                <a style="float: right; font-size: 11px;" href="{{$employees->nextPageUrl()}}" class="btn btn-success">Next</a>

                </div>
               
            </div>

                <table class="table">
                <!-- <a href="{{$employees->nextPageUrl()}}" class="btn btn-success">Next</a><br>
                <a href="{{$employees->previousPageUrl()}}" class="btn btn-primary">Previous</a> -->
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone NO</th>
                            <th scope="col">Company name</th>
                            <th scope="col">Icon</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if($employees)
                        @foreach ($employees as $employe)
                            <tr>
                                <td>{{ $employe->firstname }}</td>
                                <td>{{ $employe->lastname }}</td>
                                <td>{{ $employe->email }}</td>
                                <td>{{ $employe->phoneno }}</td>
                                <td>{{ $employe->company_name }}</td>
                                <td>
                                    <a href="{{ route('edit', $employe->id) }}" class="btn btn-warning" style="font-size: 11px;">Edit</a>
                                    <a href="{{ route('employeedelete', $employe->id) }}" class="btn btn-danger" style="font-size: 11px;">Delete</a>
                                </td>
                            </tr>
                        @endforeach
                        @else
                <tr>
                    <td colspan="10">There are no data.</td>
                </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
