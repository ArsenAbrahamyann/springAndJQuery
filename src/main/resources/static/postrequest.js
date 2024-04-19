$(document).ready(function () {

    // Submit Form
    $("#bookForm").submit(function (event) {
        // Prevent the form from submitting via the browser
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        // Prepare Form Data
        var formData = {
            bookId: $("#bookId").val(),
            bookName: $("#bookName").val(),
            author: $("#author").val()
        }

        // Do Post
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "saveBook",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function (result) {
                if (result.status == "success") {
                    $("#postResultDiv").html(result.data.bookName + " Post Successfully! <br>---> Congrats !!");
                } else {
                    $("#postResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);
            },
            error: function (e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
    }
});