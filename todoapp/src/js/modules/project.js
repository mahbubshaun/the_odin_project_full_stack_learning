import { Todo } from './todo.js';

export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.id = Date.now().toString();
    }

    addTodo(todoData) {
        const todo = new Todo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
            todoData.notes,
            todoData.checklist
        );
        this.todos.push(todo);
        return todo;
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id === id);
    }

    updateTodo(id, updates) {
        const todo = this.getTodo(id);
        if (todo) todo.update(updates);
        return todo;
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

export class ProjectManager {
    constructor() {
        this.projects = [];
        this.defaultProject = new Project('Inbox');
        this.projects.push(this.defaultProject);
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
        return project;
    }

    getProject(id) {
        return this.projects.find(project => project.id === id);
    }

    deleteProject(id) {
        this.projects = this.projects.filter(project => project.id !== id);
        if (this.projects.length === 0) {
            this.projects.push(new Project('Inbox'));
        }
    }
}