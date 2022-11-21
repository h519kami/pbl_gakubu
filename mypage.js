function table_add_5blank(){
    var table = document.getElementById("table_id");
    var table_count = table.rows.length;

    for(let i=table_count; i<6; i++){
        var row = table.insertRow(table_count);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);

        c1.innerHTML = '　';
        c2.innerHTML = '　';
        c3.innerHTML = '　';
        c4.innerHTML = '　';
    }
}