$(document).ready(function () {

    // Get Request
    $("#getAllBooks").click(function (event) {
        event.preventDefault();
        ajaxGet();
    });

    // Do Get
    function ajaxGet() {
        $.ajax({
            type: "GET",
            url: "getBooks",
            success: function (result) {
                if (result.status == "success") {
                    $('#getResultDiv ul').empty();
                    $.each(result.data, function (i, book) {
                        var bookInfo = "<li>Book Name: " + book.bookName + ", Author: " + book.author + "</li>";
                        $('#getResultDiv ul').append(bookInfo);
                    });
                } else {
                    console.log("Fail: ", result);
                }
            },
            error: function (e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
});