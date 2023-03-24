@extends('layouts.app')
@section('content')
<h1>Create Todo</h1>

<nav>
    <a href="{{ route('todos.index') }}">Back to Todos</a>
</nav>

<form action="{{ route('todos.store') }}" method="post">
    @csrf

    <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title">
    </div>

    <div>
        <label for="description">Description</label>
        <textarea id="description" name="description"></textarea>
    </div>

    <div>
        <input type="checkbox" id="completed" name="completed">
        <label for="completed">Completed</label>
    </div>

    <button type="submit">Create Todo</button>
</form>
@endsection