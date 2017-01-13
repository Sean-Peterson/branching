var add = function(q1, q2, q3) {
  return q1 + q2 + q3;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var result = add(q1, q2, q3);

    if (result === 15) {
      $(".moderate").show()
    }
    else if (result > 15) {
      $(".liberal").show()
    }
    else {
      $(".conservative").show()
    }
  });
});
