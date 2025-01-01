
function printQuiz(questions)
{
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type)
        {
            case 'boolean':
                console.log('1. True');
                console.log('2. Flase')
                break;
            case 'multipleChoice':
                question.options.forEach((
                    option, index) => {
                        console.log(`${index + 1}. ${option}`);
                    }
                );
                break
            case 'text':
                console.log('Answer:______________');
                break
            case 'range':
                console.log('1. 0');
                console.log('2. 1');
                console.log('3. 2');
        }
        console.log('');
    });
}
const questions = [
    {
        type : 'boolean',
        description: 'This video is useful'
    },
    {
        type: 'multipleChoice',
        description: 'What is the capital of France',
        options: ['CSS', 'HTML', 'JS', 'PYTHON']
    },
    {
        type: 'text',
        description: 'What is your name',
        

    },
    {
        type: 'range',
        description: 'How many hours do you sleep',
    }

]

printQuiz(questions);