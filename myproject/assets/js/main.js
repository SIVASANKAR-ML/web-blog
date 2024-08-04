document.addEventListener('DOMContentLoaded', function() {
    console.log('This is JS from your about page.');

    // Add a greeting message based on the time of day
    const greetingElement = document.createElement('h2');
    const currentTime = new Date().getHours();
    let greetingMessage;

    if (currentTime < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentTime < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
    greetingElement.style.textAlign = 'center';
    greetingElement.style.color = '#81DBB8';
    greetingElement.style.margin = '1rem 0';
    greetingElement.style.fontSize = '2rem';

    document.body.prepend(greetingElement);

    // Create a theme toggle button
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    themeToggleButton.style.padding = '0.5rem 1rem';
    themeToggleButton.style.margin = '1rem auto';
    themeToggleButton.style.display = 'block';
    themeToggleButton.style.fontSize = '1rem';
    themeToggleButton.style.cursor = 'pointer';
    themeToggleButton.style.backgroundColor = '#44B78B';
    themeToggleButton.style.color = '#FFF';
    themeToggleButton.style.border = 'none';
    themeToggleButton.style.borderRadius = '5px';
    themeToggleButton.style.transition = 'background-color 0.3s ease';

    themeToggleButton.addEventListener('mouseover', function() {
        themeToggleButton.style.backgroundColor = '#369972';
    });

    themeToggleButton.addEventListener('mouseout', function() {
        themeToggleButton.style.backgroundColor = '#44B78B';
    });

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    document.body.appendChild(themeToggleButton);

    // Apply dark theme styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .dark-theme {
            background-color: #1e1e1e;
            color: #cfcfcf;
        }

        .dark-theme nav {
            background: linear-gradient(45deg, #369972, #2b6e59);
        }

        .dark-theme a {
            color: #ffcc80;
        }

        .dark-theme a:hover {
            color: #ffa726;
        }
    `;
    document.head.appendChild(styleSheet);

    // Form submission animation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Simulate form validation (replace with actual validation logic)
            const formIsValid = true;

            if (formIsValid) {
                const submitButton = document.getElementById('submitButton');
                const spinner = submitButton.querySelector('.loading-spinner');
                const successMessage = document.getElementById('successMessage');

                // Add loading animation
                submitButton.classList.add('loading');
                spinner.style.display = 'inline-block';

                // Simulate form submission process
                setTimeout(function() {
                    // Remove the loading animation class
                    submitButton.classList.remove('loading');
                    spinner.style.display = 'none';

                    // Show success message
                    successMessage.style.display = 'block';

                    // Animate form out
                    registerForm.classList.add('submitted');

                    // Perform the actual form submission after a delay
                    setTimeout(function() {
                        event.target.submit();
                    }, 1000); // Delay to show the success message
                }, 2000); // Simulate a delay of 2 seconds
            }
        });
    }
});
