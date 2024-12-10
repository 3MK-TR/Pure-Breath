const channelID = '2776577';
const readAPIKey = 'I9A9LNGK07LQ5BOM';

async function fetchData() {
    const response = await fetch(`https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${readAPIKey}&results=1`);
    const data = await response.json();
    const feeds = data.feeds[0];

    document.getElementById('temperature').textContent = feeds.field1;
    document.getElementById('humidity').textContent = feeds.field2;
    document.getElementById('mq2').textContent = feeds.field3;
    document.getElementById('mq135').textContent = feeds.field4;
    document.getElementById('dust').textContent = feeds.field5;
}

fetchData();
setInterval(fetchData, 30000);  // Update data every 30 seconds
