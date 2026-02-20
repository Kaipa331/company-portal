<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    // List all projects
    public function index()
    {
        $projects = Project::latest()->get();

        return Inertia::render('Admin/Projects', [
            'projects' => $projects,
        ]);
    }

    // Store a new project
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'client'      => 'required|string|max:255',
            'status'      => 'required|in:Active,Pending,Completed',
            'description' => 'nullable|string',
        ]);

        Project::create($validated);

        // Redirect with flash message
        return redirect()->route('admin.projects')
            ->with('success', 'Project created successfully!');
    }

    // Update an existing project
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'client'      => 'required|string|max:255',
            'status'      => 'required|in:Active,Pending,Completed',
            'description' => 'nullable|string',
        ]);

        $project->update($validated);

        // Redirect with flash message
        return redirect()->route('admin.projects')
            ->with('success', 'Project updated successfully!');
    }

    // Delete a project
    public function destroy(Project $project)
    {
        $project->delete();

        // Redirect with flash message
        return redirect()->route('admin.projects')
            ->with('success', 'Project deleted successfully!');
    }
}
