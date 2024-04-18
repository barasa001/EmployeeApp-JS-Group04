$("#add_employee").submit(function(event){
    alert("Data Inserted Successfully!");
});

$("#update_employee").submit(function(event){
    event.preventDefault();

    var formData = $(this).serializeArray();
    var data = {};

    formData.forEach(function(field) {
        data[field.name] = field.value;
    });

    console.log("Form data:", formData);
    console.log("Serialized data:", data);

    var request = {
        url: `http://localhost:3000/api/employees/${data.id}`,
        method: "PUT",
        data: data // Send form data as JSON
    };

    console.log("Update request:", request);

    $.ajax(request).done(function(response){
        console.log("Update response:", response);
        alert("Data Updated Successfully!");
    });
});

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        console.log("Delete ID:", id);

        var request = {
            "url" : `http://localhost:3000/api/employees/${id}`,
            "method" : "DELETE"
        };

        console.log("Delete request:", request);

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                console.log("Delete response:", response);
                alert("Data Deleted Successfully!");
                location.reload();
            });
        }
    });
}