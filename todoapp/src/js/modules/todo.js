export class Todo {
    constructor(title, description, dueDate, priority, notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate).toISOString();
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false;
        this.id = Date.now().toString();
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    update(data) {
        Object.assign(this, data);
        if (data.dueDate) {
            this.dueDate = new Date(data.dueDate).toISOString();
        }
    }
}