$(".btn-gender").click(function () {
    $(".btn-gender").removeClass("btn-primary")
    $(".btn-gender").addClass("btn-light")
    $(this).toggleClass("btn-primary");
    $(this).toggleClass("btn-light");
})
$(".btn-marital").click(function () {
    $(".btn-marital").removeClass("btn-primary")
    $(".btn-marital").addClass("btn-light")
    $(this).toggleClass("btn-primary");
    $(this).toggleClass("btn-light");
})

/**----------------Page Change--------------------- */
$("#point1").click(function () {
    $("#inner-right1").slideUp(300, function () {
        $("#inner-right2").slideDown(200);
        $("#points1").addClass("actived");
        $("#points1").removeClass("active");
        $("#points2").addClass("active");
        $("#one").html(`<i class="fas fa-check"></i>`);
    })
})
$("#point2").click(function () {
    $("#inner-right2").slideUp(300, function () {
        $("#inner-right3").slideDown(200);
        $("#points2").addClass("actived");
        $("#points2").removeClass("active");
        $("#points3").addClass("active");
        $("#two").html(`<i class="fas fa-check"></i>`);
    })
})
$("#prev3").click(function () {
    $("#inner-right3").slideUp(300, function () {
        $("#inner-right2").slideDown(200);
        $("#points1").addClass("actived");
        $("#points1").removeClass("active");
        $("#points3").removeClass("active");
        $("#points2").addClass("active");
        $("#two").html(`2`);
    })
})
$("#prev2").click(function () {
    $("#inner-right2").slideUp(300, function () {
        $("#inner-right1").slideDown(200);
        $("#points1").addClass("active");
        $("#points2").removeClass("actived");
        $("#points2").removeClass("active");
        $("#one").html(`1`);
    })
})