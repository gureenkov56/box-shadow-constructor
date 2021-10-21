$(document).ready(function () {
  let offsetX = "10";
  let offsetY = "10";
  let blurRadius = "1";
  let spreadRadius = "1";
  let color = "#000000";

  // color change
  $("#colorPicker").on("input", function () {
    color = $(this).val();
    somethingWasChanged(offsetX, offsetY, blurRadius, spreadRadius, color);
  });

  // offset x change
  $("#offsetx").on("input", function () {
    offsetX = $(this).val();
    somethingWasChanged(offsetX, offsetY, blurRadius, spreadRadius, color);
  });

  // offset y change
  $("#offsety").on("input", function () {
    offsetY = $(this).val();
    somethingWasChanged(offsetX, offsetY, blurRadius, spreadRadius, color);
  });

  $("#blurRadius").on("input", function () {
    blurRadius = $(this).val();
    somethingWasChanged(offsetX, offsetY, blurRadius, spreadRadius, color);
  });

  $("#spreadRadius").on("input", function () {
    spreadRadius = $(this).val();
    somethingWasChanged(offsetX, offsetY, blurRadius, spreadRadius, color);
  });

  // refresh styles after change one of them
  function somethingWasChanged(
    newOffsetX,
    newOffsetY,
    newBlurRadius,
    newSpreadRadius,
    newColor
  ) {
    console.log(
      `${newOffsetX}px ${newOffsetY}px ${newBlurRadius}px ${newSpreadRadius}px ${newColor}`
    );
    $(".block-example").css(
      "box-shadow",
      `${newOffsetX}px ${newOffsetY}px ${newBlurRadius}px ${newSpreadRadius}px ${newColor}`
    );
    $(".text-example").css(
      "text-shadow",
      `${newOffsetX}px ${newOffsetY}px ${newBlurRadius}px  ${newColor}`
    );
    $("#codeForBlock").text(
      `box-shadow: ${newOffsetX}px ${newOffsetY}px ${newBlurRadius}px ${newSpreadRadius}px ${newColor};`
    );
    $("#codeForText").text(
      `text-shadow: ${newOffsetX}px ${newOffsetY}px ${newBlurRadius}px ${newColor};`
    );
  }

  // copy code for block
  $("#copyCodeForBlock").click(function () {
    let codeForBlock = $("#codeForBlock").text();
    navigator.clipboard.writeText(codeForBlock);
    alert("Copied the text: " + codeForBlock);
  });

  $("#copyCodeForText").click(function () {
    let codeForText = $("#codeForText").text();
    navigator.clipboard.writeText(codeForText);
    alert("Copied the text: " + codeForText);
  });
});
