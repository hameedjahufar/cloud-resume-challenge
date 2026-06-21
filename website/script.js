async function getVisitorCount() {

    const response = await fetch(
        "https://h1837u1nuh.execute-api.us-east-1.amazonaws.com/prod/visitorcount"
    );

    const data = await response.json();

    document.getElementById("count").innerText =
        data.count;
}

getVisitorCount();
