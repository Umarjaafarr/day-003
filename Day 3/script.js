document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Save text to a file
    saveBtn.addEventListener('click', () => {
        const text = textInput.value;
        if (!text) {
            alert("Please enter some text first!");
            return;
        }

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'saved_text.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

    // upload text from a file
    uploadBnt.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'upload file';
        input.accept = '.txt';

        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                textInput.value = event.target.result;
            };
            reader.readAsText(file);
        };

        input.click();
    });

    // Clear text
    clearBtn.addEventListener('click', () => {
        textInput.value = '';
    });
});