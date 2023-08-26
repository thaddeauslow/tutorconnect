// event handler for submit
document.addEventListener("DOMContentLoaded", () => {
    var loginForm = document.getElementById("loginForm")

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = $("#email").val()
        const password = $("#password").val()

        fetch('/authentication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": email, "password": password})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
            // Handle the response data
                window.location.href = "/dashboard"
            }
            else {
                $("#notFound").text(Object.values(data)[0])
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
})


