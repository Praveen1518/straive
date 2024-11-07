export default function json2html(data) {
    // Start the HTML table with data-user attribute and table headers
    let html = `<table data-user="praveenchary1518@gmail.com">
<thead>
<tr><th>Name</th><th>Age</th><th>Gender</th></tr>
</thead>
<tbody>`;

    // Iterate over each object in the data array
    data.forEach(item => {
        html += `<tr>
<td>${item.Name || ""}</td>
<td>${item.Age || ""}</td>
<td>${item.Gender || ""}</td>
</tr>`;
    });

    // Close the table tags
    html += `</tbody>
</table>`;

    // Return the generated HTML string
    return html;
}
