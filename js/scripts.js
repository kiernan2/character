$(document).ready(function(){
  $("form#input").submit(function(event) {
    event.preventDefault();
    const operator1 = $("input:radio[name=operator1]:checked").val();
    const operator2 = $("input:radio[name=operator2]:checked").val();

    console.log(operator1)
    console.log(operator2)

    if (operator1 === "first") {
      if (operator2 === "third") {
        $("#output").text("gravida");
      } else if (operator2 === "fourth") {
        $("#output").text("volutpat");
      }
    } else if (operator1 === "second") {
      if (operator2 === "third") {
        $("#output").text("vestibulum");
      } else if (operator2 === "fourth") {
        $("#output").text("porttitor");
      }
    }
  });
});