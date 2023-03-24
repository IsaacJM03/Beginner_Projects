@extends('layouts.app')

@section('content')
    <h1>Todos</h1>

    <a href="{{ route('todos.create') }}">Create Todo</a>


    <ul>
        @foreach($todos as $todo)
            <li>
                <a href="{{ route('todos.edit', $todo) }}">{{ $todo->title }}</a>

                <form action="{{ route('todos.destroy', $todo) }}" method="post">
                    @csrf
                    @method('delete')

                    <button type="submit">Delete</button>
                </form>
            </li>
        @endforeach
    </ul>

    <link rel="stylesheet" href="{{ asset('resources/css/app.css') }}">
@endsection
