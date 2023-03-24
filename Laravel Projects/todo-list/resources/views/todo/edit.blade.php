@extends('layouts.app')
@section('content')

    <h1>Edit Todo</h1>

    <form method="POST" action="{{ route('todos.update', $todo->id) }}">
        @csrf
        @method('PUT')

        <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" value="{{ $todo->title }}" required>
        </div>

        <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" required>{{ $todo->description }}</textarea>
        </div>

        <div>
            <label for="due_date">Due Date</label>
            <input type="date" name="due_date" id="due_date" value="{{ $todo->due_date }}">
        </div>

        <div>
            <label for="completed">Completed:</label>
            <input type="checkbox" id="completed" name="completed" {{ $todo->completed ? 'checked' : '' }} />
        </div>

        <button type="submit">Update</button>
    </form>

    <a href="{{ route('todos.index') }}">Back to list</a>
@endsection