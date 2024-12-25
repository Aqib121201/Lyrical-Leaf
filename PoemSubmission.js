document.getElementById("submitPoemModal").style.display = "flex";
document.body.classList.add("modal-open");

// Form submission handling (Mock-up)
document.getElementById("submitPoemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("poemTitle").value;
    const content = document.getElementById("poemContent").value;
    const author = document.getElementById("poemAuthor").value || "Anonymous";

    // Display Poem Data in Console (for now)
    console.log(`Poem Title: ${title}`);
    console.log(`Poem Content: ${content}`);
    console.log(`Written by: ${author}`);

    // Immediately show "Poem Submitted Successfully"
    const modalContent = document.getElementById("submitPoemModal");
    modalContent.innerHTML = `
        <div class="modal-content">
            <h3>Poem Submitted Successfully!</h3>
            <p>Redirecting you back to the homepage...</p>
        </div>
    `;

    // Wait for 2 seconds (or desired delay) before redirecting
    setTimeout(function() {
        window.location.href = "index.html"; // Redirect to homepage
    }, 2000); // 2000 milliseconds = 2 seconds

    // Optionally, you can reset the form, though it's not strictly necessary
    document.getElementById("submitPoemForm").reset();
});
