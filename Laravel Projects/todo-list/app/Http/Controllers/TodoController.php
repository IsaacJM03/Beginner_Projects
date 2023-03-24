<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Carbon\Carbon;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::all();
        $todos = Todo::orderBy('created_at', 'desc')->get();
        return view('todo.index',['todos'=>$todos],compact('todos'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('todo.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData= $request->validate([
            'title'=>'required|max:255',
            'description'=>'required',
        ]);
        $todo = new Todo;
        $todo->title = $validatedData['title'];
        $todo->description = $validatedData['description'];
        $todo->save();

        return redirect('/todos')->with('success','Todo successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $todo = Todo::findOrFail($id);
        return view('todo.show',['todo'=>$todo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $todo = Todo::findOrFail($id);

        return view('todo.edit',['todo'=>$todo]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'due_date' => 'nullable|date',
        ]);

        $todo = Todo::findOrFail($id);
        $todo->title = $validatedData['title'];
        $todo->due_date = $validatedData['due_date'];

        $completed = $request->input('completed');
        $todo->completed = $completed === 'on' ? true : false;

        $todo->save();

        return redirect('/todos')->with('success', 'Todo updated successfully');
    }


    public function complete(Todo $todo)
    {
        $todo->completed = !$todo->completed;
        $todo->save();

        return redirect('/todos')->with('success', 'Todo status updated');
    }






    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->delete();

        return redirect('/todos')->with('success','Todo deleted successfully');
    }
}
