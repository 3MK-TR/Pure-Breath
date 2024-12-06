
async function fetchData() {
    const url = "https://api.thingspeak.com/channels/2776577/feeds.json?api_key=I9A9LNGK07LQ5BOM&results=5";
    try {
        const response = await fetch(url);
        const data = await response.json();
        let output = "<ul>";
        data.feeds.forEach(feed => {
            output += `<li><strong>Time:</strong> ${feed.created_at}, <strong>Temperature:</strong> ${feed.field1}, <strong>Humidity:</strong> ${feed.field2}, <strong>MQ2:</strong> ${feed.field3}, <strong>MQ135:</strong> ${feed.field4}, <strong>Air Dust:</strong> ${feed.field5}</li>`;
        });
        output += "</ul>";
        document.getElementById("data-container").innerHTML = output;
    } catch (error) {
        document.getElementById("data-container").innerHTML = "Error fetching data.";
    }
}
fetchData();
