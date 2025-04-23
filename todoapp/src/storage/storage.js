export const Storage = {
    save(projects) {
        try {
            const serialized = JSON.stringify(projects);
            localStorage.setItem('todoData', serialized);
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    },

    load() {
        try {
            const data = localStorage.getItem('todoData');
            if (!data) return null;
            
            return JSON.parse(data, (key, value) => {
                if (key === 'dueDate') return new Date(value);
                return value;
            });
        } catch (error) {
            console.error('Failed to load data:', error);
            return null;
        }
    },

    clear() {
        localStorage.removeItem('todoData');
    }
};