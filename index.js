$(document).ready(function() {
  $(".hamburger").click(function() {
    $("aside").toggleClass("openedMenu");
    $("#menuWrapper").toggleClass("menuWrapperShowed");
  });
  $("#iconLight").click(function() {
    $("#iconLight, #light, #descriptionLight").toggleClass("deactivated");
    $("#lightMode").toggleClass("controllerOff");
  });
  $("#iconRollerShades").click(function() {
    $("#iconRollerShades, #rollerShades,#descriptionRoller").toggleClass(
      "deactivated"
    );
    $("#rollerMode").toggleClass("controllerOff");
  });
  $("#iconWirelessAudio").click(function() {
    $(
      "#iconWirelessAudio, #wirelessAudio, #descriptionWirelessAudio"
    ).toggleClass("deactivated");
    $("#audioMode").toggleClass("controllerOff");
  });
  $("#iconCoffeeMaker").click(function() {
    $("#iconCoffeeMaker, #coffeeMaker, #descriptionCoffeeMaker").toggleClass(
      "deactivated"
    );
    $("#coffeeMakerMode").toggleClass("controllerOff");
  });
  $("#controlls").click(function() {
    $(".controllerWrapper").toggleClass("hide");
  });
  $("#controlls").click(function() {
    $(".arrowHide").toggleClass("arrowOpen");
  });
  $(".controlLinkHuminidy").click(function() {
    $(".links div").removeClass("activated");
    $(".controlLinkHuminidy").addClass("activated");
  });
  $(".controlLinkTemperature").click(function() {
    $(".links div").removeClass("activated");
    $(".controlLinkTemperature").addClass("activated");
  });
  $(".optionConditioner").click(function() {
    $(".controllerOptions div, .controllerOptions div i").removeClass(
      "selected"
    );
    $(".optionConditioner, .optionConditioner i").addClass("selected");
  });
  $(".optionLighting").click(function() {
    $(".controllerOptions div, .controllerOptions div i").removeClass(
      "selected"
    );
    $(".optionLighting, .optionLighting i").addClass("selected");
  });
  $(".optionHeating").click(function() {
    $(".controllerOptions div, .controllerOptions div i").removeClass(
      "selected"
    );
    $(".optionHeating, .optionHeating i").addClass("selected");
  });
  $(".optionRefresh").click(function() {
    $(".controllerOptions div, .controllerOptions div i").removeClass(
      "selected"
    );
    $(".optionRefresh, .optionRefresh i").addClass("selected");
  });
  $(".circleOnOff").click(function() {
    if ($(this).attr("data-click-state") == 0) {
      $(this).attr("data-click-state", 1);
      $("#slider").roundSlider({
        radius: 80,
        width: 16,
        min: 0,
        max: 40,
        value: 0,
        handleSize: "0",
        handleShape: "dot",
        sliderType: "min-range",
        circleShape: "pie",
        startAngle: 315,
        editableTooltip: false,
        showTooltip: false,
        lineCap: "round"
      });
      $(".rs-handle").addClass("deactivatedHandle");
      $(".rs-range-color").addClass("deacrivateRangeColor");
      $("#circleOnOff").addClass("turnedOff");
      $(".circleOn").removeClass("show");
      $(".circleOn").addClass("hide");
      $(".circleOff").removeClass("hide");
      $(".circleOff").addClass("show");
    } else {
      $(this).attr("data-click-state", 0);
      $("#slider").roundSlider({
        radius: 80,
        width: 16,
        min: 0,
        max: 40,
        handleSize: "+16",
        handleShape: "dot",
        sliderType: "min-range",
        value: 24,
        circleShape: "pie",
        startAngle: 315,
        editableTooltip: false,
        showTooltip: true,
        lineCap: "round"
      });
      $(".rs-handle").removeClass("deactivatedHandle");
      $(".rs-range-color").removeClass("deacrivateRangeColor");
      $("#circleOnOff").removeClass("turnedOff");
      $(".circleOff").removeClass("show");
      $(".circleOff").addClass("hide");
      $(".circleOn").removeClass("hide");
      $(".circleOn").addClass("show");
    }
  });

  $("#slider").roundSlider({
    radius: 80,
    width: 16,
    min: 0,
    max: 40,
    handleSize: "+16",
    handleShape: "dot",
    sliderType: "min-range",
    value: 24,
    circleShape: "pie",
    startAngle: 315,
    editableTooltip: false,
    lineCap: "round"
  });
});
