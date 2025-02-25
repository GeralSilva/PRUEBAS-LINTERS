export function setupformHandler() {
    const form = document.getElementById('survey');

    form.addEventListener('submit' , function(event) {
        event.preventDefault();


        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const dropdown = document.getElementById('dropdown').value;
        const radioButtons = document.getElementById('input [name="choice"]:checked');
        const checkboxes = document.getElementById('input [type="checkbox"]:checked');
        const comments = document.getElementById('comments').value;

        if(name && email && age && dropdown && radioButtons.length > 0 && checkboxes.length > 0 && comments){

            alert('Form submitted succesfully!');

            form.reset()
        } else {
            alert('Please fill out all required fields.' );
        }
            


    })
}  