// Sample lesson data
const lessonsData = [
    {
        id: 1,
        title: "Basic Greetings",
        description: "Learn common German greetings and introductions",
        duration: "15 min",
        points: 100,
        status: "unlocked",
        content: {
            vocabulary: [
                { german: "Hallo", english: "Hello" },
                { german: "Guten Tag", english: "Good day" },
                { german: "Auf Wiedersehen", english: "Goodbye" }
            ],
            examples: [
                { german: "Hallo, wie geht's?", english: "Hello, how are you?" }
            ]
        }
    },
    // Add more lessons...
];

class LessonManager {
    constructor() {
        this.lessons = lessonsData;
        this.currentUserProgress = this.loadUserProgress();
    }

    loadUserProgress() {
        // In MVP, we'll use localStorage. Later, this would be an API call
        return JSON.parse(localStorage.getItem('userProgress')) || {
            completedLessons: [],
            currentLesson: 1
        };
    }

    saveUserProgress() {
        localStorage.setItem('userProgress', JSON.stringify(this.currentUserProgress));
    }

    isLessonCompleted(lessonId) {
        return this.currentUserProgress.completedLessons.includes(lessonId);
    }

    isLessonLocked(lessonId) {
        return lessonId > this.currentUserProgress.currentLesson;
    }

    renderLessons() {
        const grid = document.querySelector('.lessons-grid');
        const template = document.getElementById('lesson-template');

        this.lessons.forEach(lesson => {
            const clone = template.content.cloneNode(true);
            
            // Set lesson content
            clone.querySelector('.lesson-title').textContent = lesson.title;
            clone.querySelector('.lesson-description').textContent = lesson.description;
            clone.querySelector('.duration').textContent = lesson.duration;
            clone.querySelector('.points').textContent = `${lesson.points} points`;

            const card = clone.querySelector('.lesson-card');
            
            // Set lesson status
            if (this.isLessonCompleted(lesson.id)) {
                card.classList.add('completed');
            } else if (this.isLessonLocked(lesson.id)) {
                card.classList.add('locked');
            }

            // Add click handler
            const startButton = clone.querySelector('.start-button');
            startButton.addEventListener('click', () => this.startLesson(lesson.id));

            grid.appendChild(clone);
        });
    }

    startLesson(lessonId) {
        if (this.isLessonLocked(lessonId)) {
            this.showLockedMessage();
            return;
        }

        // Navigate to lesson detail page
        window.location.href = `lesson-detail.html?id=${lessonId}`;
    }

    showLockedMessage() {
        alert('Complete previous lessons to unlock this one!');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    const lessonManager = new LessonManager();
    lessonManager.renderLessons();
});