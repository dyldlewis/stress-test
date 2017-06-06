$(document).ready(function() {
  $("#stress-test").submit(function(event) {
    event.preventDefault()
    var warnings = [];
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warning = $(this).val();
      warnings.push(warning)
    });
    var symptoms = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var symptom = $(this).val();
      symptoms.push(symptom)
    });
    var methods = [];
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var method = $(this).val();
      methods.push(method)
    });

    if (methods.length > 3) {
      $("#results").text("You seem to be coping pretty well, keep it up")
    } else if (warnings.length + symptoms.length <5 ) {
      $("#results").text("Ehhh you're not doing too bad, maybe try some yoga")
    } else if (warnings.length + symptoms.length >= 5) {
      $("#results").text("We reccomend you see a doctor, your demise is coming")
    }
    // console.log(warnings, symptoms, methods)
  });
});
