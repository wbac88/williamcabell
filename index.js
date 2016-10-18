$(document).ready(function() {

  $("#developer").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#devdetails").fadeIn("fast", function(){

      });
    });
  });

  $("#dance").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#dancedetails").fadeIn("fast", function(){

      });
    });
  });

  $("#steam").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#steamdetails").fadeIn("fast", function(){

      });
    });
  });

  $("#nature").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#naturedetails").fadeIn("fast", function(){

      });
    });
  });

  $("#bonsai").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#bonsaidetails").fadeIn("fast", function(){

      });
    });
  });

  $("#travel").click(function(){

    $("#menu").fadeOut("fast", function(){

      $("#traveldetails").fadeIn("fast", function(){

      });
    });
  });

  $(".details").click(function() {

    $(this).fadeOut("fast", function() {

      $("#menu").fadeIn("fast", function(){
      });
    });
  });

});
