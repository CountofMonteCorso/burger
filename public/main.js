$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log("added new burger");
        location.reload(); // Reload the page so we can see the new burger
      }
    );
  });

  $(".change-eaten").on("click", function(event) {
                    //this is a data attribute used in index.handlebars
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});

