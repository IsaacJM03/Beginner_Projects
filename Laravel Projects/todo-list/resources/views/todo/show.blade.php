@extends('layouts.app')
<h1>{{ $todo->title }}</h1>

<div>
    <strong>Description:</strong> {{ $todo->description }}
</div>

<div>
    <strong>Due date:</strong> {{ $todo->due_date ? $todo->due_date->format('d/m/Y') : 'Not specified' }}
</div>

<div>
    <strong>Status:</strong> {{ $todo->completed ? 'Completed' : 'Incomplete' }}
</div>

<a href="{{ route('todos.edit', ['todo' => $todo->id]) }}">Edit</a>

<form method="POST" action="{{ route('todos.destroy', ['todo' => $todo->id]) }}">
    @csrf
    @method('DELETE')
    <button type="submit">Delete</button>
</form>

<a href="{{ route('todos.index') }}">Back to list</a>
