function addingEventListener() {

        // Step 1: Select the input#button element
        const input = document.getElementById('button');
        
        // Step 2: Define the clickAlert function
        function clickAlert() {
            alert('I was clicked!');
        }
        
        // Step 3: Attach clickAlert to the click event of the input
        input.addEventListener('click', clickAlert);
    }
    
    // Call the function to attach the event listener to the button
    addingEventListener();
    

