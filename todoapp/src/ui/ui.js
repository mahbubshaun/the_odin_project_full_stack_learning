// src/js/ui/ui.js
import { format } from 'date-fns';
import { Project, ProjectManager } from '../js/modules/project.js'; // Add Project to imports
import { Storage } from '../storage/storage.js';

export class UI {
    constructor() {
        this.projectManager = new ProjectManager();
        this.currentProject = this.projectManager.defaultProject;
        this.init();
    }

    init() {
        // this.loadData();
        this.renderProjects();
        this.renderTodos();
        this.setupEventListeners();
    }

    // loadData() {
    //     const data = Storage.load();
    //     if (data) {
    //         this.projectManager.projects = data.map(projectData => {
    //             const project = new Project(projectData.name);
    //             project.id = projectData.id;
    //             project.todos = projectData.todos.map(todoData => {
    //                 const todo = new Todo(
    //                     todoData.title,
    //                     todoData.description,
    //                     todoData.dueDate,
    //                     todoData.priority,
    //                     todoData.notes,
    //                     todoData.checklist
    //                 );
    //                 todo.id = todoData.id;
    //                 todo.completed = todoData.completed;
    //                 return todo;
    //             });
    //             return project;
    //         });
    //         this.currentProject = this.projectManager.projects[0];
    //     }
    // }

    renderProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        
        this.projectManager.projects.forEach(project => {
            const li = document.createElement('li');
            li.dataset.projectId = project.id;
            li.textContent = project.name;
            
            if (project.id === this.currentProject.id) {
                li.classList.add('active');
            }
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteProject(project.id);
            });
            
            li.appendChild(deleteBtn);
            li.addEventListener('click', () => {
                this.currentProject = project;
                this.renderTodos();
                document.querySelectorAll('#project-list li').forEach(item => {
                    item.classList.remove('active');
                });
                li.classList.add('active');
            });
            
            projectList.appendChild(li);
        });
    }

    renderTodos() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        document.getElementById('current-project').textContent = this.currentProject.name;

        if (this.currentProject.todos.length === 0) {
            todoList.innerHTML = '<p class="empty-message">No todos yet. Add one!</p>';
            return;
        }

        this.currentProject.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''}`;
            li.dataset.todoId = todo.id;
            
            li.innerHTML = `
                <div class="todo-checkbox">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                </div>
                <div class="todo-content">
                    <h3>${todo.title}</h3>
                    <p class="due-date">${format(new Date(todo.dueDate), 'MMM dd, yyyy')}</p>
                    <p class="description">${todo.description}</p>
                </div>
                <button class="delete-btn">×</button>
            `;
            
            li.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
                todo.toggleCompleted();
                li.classList.toggle('completed');
                this.saveAndRender();
            });
            
            li.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.currentProject.deleteTodo(todo.id);
                this.saveAndRender();
            });
            
            li.addEventListener('click', (e) => {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
                    this.showTodoDetails(todo);
                }
            });
            
            todoList.appendChild(li);
        });
    }

    showTodoDetails(todo) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-content">
                <h2>Edit Todo</h2>
                <form id="edit-todo-form">
                    <label>
                        Title:
                        <input type="text" id="edit-title" value="${todo.title}" required>
                    </label>
                    
                    <label>
                        Description:
                        <textarea id="edit-description">${todo.description}</textarea>
                    </label>
                    
                    <label>
                        Due Date:
                        <input type="date" id="edit-dueDate" value="${todo.dueDate.split('T')[0]}" required>
                    </label>
                    
                    <label>
                        Priority:
                        <select id="edit-priority">
                            <option value="low" ${todo.priority === 'low' ? 'selected' : ''}>Low</option>
                            <option value="medium" ${todo.priority === 'medium' ? 'selected' : ''}>Medium</option>
                            <option value="high" ${todo.priority === 'high' ? 'selected' : ''}>High</option>
                        </select>
                    </label>
                    
                    <label>
                        Notes:
                        <textarea id="edit-notes">${todo.notes}</textarea>
                    </label>
                    
                    <div class="form-actions">
                        <button type="submit">Save</button>
                        <button type="button" class="cancel-btn">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const updatedTodo = {
                title: document.getElementById('edit-title').value,
                description: document.getElementById('edit-description').value,
                dueDate: document.getElementById('edit-dueDate').value,
                priority: document.getElementById('edit-priority').value,
                notes: document.getElementById('edit-notes').value
            };
            
            this.currentProject.updateTodo(todo.id, updatedTodo);
            this.saveAndRender();
            document.body.removeChild(modal);
        });
    }

    setupEventListeners() {
        // New Project Button
        document.getElementById('new-project-btn').addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>New Project</h2>
                    <form id="new-project-form">
                        <label>
                            Project Name:
                            <input type="text" id="project-name" required>
                        </label>
                        <div class="form-actions">
                            <button type="submit">Create</button>
                            <button type="button" class="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.cancel-btn').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.querySelector('form').addEventListener('submit', (e) => {
                e.preventDefault();
                const projectName = document.getElementById('project-name').value;
                this.projectManager.addProject(projectName);
                this.saveAndRender();
                document.body.removeChild(modal);
            });
        });
        
        // New Todo Button
        document.getElementById('new-todo-btn').addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>New Todo</h2>
                    <form id="new-todo-form">
                        <label>
                            Title:
                            <input type="text" id="todo-title" required>
                        </label>
                        
                        <label>
                            Description:
                            <textarea id="todo-description"></textarea>
                        </label>
                        
                        <label>
                            Due Date:
                            <input type="date" id="todo-dueDate" required>
                        </label>
                        
                        <label>
                            Priority:
                            <select id="todo-priority">
                                <option value="low">Low</option>
                                <option value="medium" selected>Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                        
                        <label>
                            Notes:
                            <textarea id="todo-notes"></textarea>
                        </label>
                        
                        <div class="form-actions">
                            <button type="submit">Add Todo</button>
                            <button type="button" class="cancel-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            `;
            
            // Set default date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            // document.getElementById('todo-dueDate').valueAsDate = tomorrow;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.cancel-btn').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            modal.querySelector('form').addEventListener('submit', (e) => {
                e.preventDefault();
                const newTodo = {
                    title: document.getElementById('todo-title').value,
                    description: document.getElementById('todo-description').value,
                    dueDate: document.getElementById('todo-dueDate').value,
                    priority: document.getElementById('todo-priority').value,
                    notes: document.getElementById('todo-notes').value
                };
                
                this.currentProject.addTodo(newTodo);
                this.saveAndRender();
                document.body.removeChild(modal);
            });
        });
    }

    deleteProject(projectId) {
        if (this.projectManager.projects.length <= 1) {
            alert("You must have at least one project!");
            return;
        }
        
        if (confirm("Are you sure you want to delete this project and all its todos?")) {
            this.projectManager.deleteProject(projectId);
            if (this.currentProject.id === projectId) {
                this.currentProject = this.projectManager.projects[0];
            }
            this.saveAndRender();
        }
    }

    saveAndRender() {
        Storage.save(this.projectManager.projects);
        this.renderProjects();
        this.renderTodos();
    }
}