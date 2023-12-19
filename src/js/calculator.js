async function displayHome() {
    try {
        // Fetch the content from another HTML page
        const response = await fetch('dashboard.html');
        const html = await response.text();

        // Create a temporary element to hold the fetched HTML
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;

        // Extract the specific element you want
        const specificElement = tempElement.querySelector('#frame');

        // Insert the specific element into the target element
        document.getElementById("frame").innerHTML = specificElement.outerHTML;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}