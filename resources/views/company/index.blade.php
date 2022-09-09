@extends('layouts.main')
<x-app-layout>
    <x-slot name="header">
        
    </x-slot>
</x-app-layout>
@section('content')

<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Companies Database</h1>
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
                
                    <div class="col-md-4 text-center" >No of companies {{$companies->count()}}</div>
                    <div class="col-md-4 text-center" style="font-size: 18px; color: brown;">Company List</div>
                    <div class="col-md-4 text-center" > <a href="{{ route('add') }}" class="btn btn-primary mb-2" 
                    style="font-size: 11px;">Create</a></div>
                
            </div>
        </div>
        <div class="card-body">
            <div class="col-md-12">
                <div class="" style="margin: 10px 10%;">
                <a href="{{$companies->previousPageUrl()}}" class="btn btn-secondary" style="font-size: 11px;">Previous</a>
                <a  href="{{$companies->nextPageUrl()}}" class="btn btn-success" style="font-size: 11px;float: right;">Next</a>

                </div>
                <!-- <div class="col-md-10">

                </div> -->
            </div>
           
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Icon</th>
                    </tr>
                </thead>
                <tbody>
                    @if($companies && $companies->count())
                    @foreach ($companies as $company)
                    <tr>
                        <td>{{ $company->name }}</td>
                        <td>{{ $company->email }}</td>
                        <td>{{ $company->website }}</td>
                        <td> 
                            <img style="height: 38px; width: 39px;border-radius: 50%;"
                             src="{{ asset('assets/images/'.$company->image)}}">
                        </td>

                       





                        <td>
                            <a href="{{ route('companiesedit', $company->id) }}" class="btn btn-warning" style="font-size: 11px;">Edit</a>
                            <a href="{{ route('delete', $company->id) }}" class="btn btn-danger" style="font-size: 11px;">Delete</a>
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