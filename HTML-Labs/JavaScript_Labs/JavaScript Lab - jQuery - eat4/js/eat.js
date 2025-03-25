window.onload = function () {
    var el;
    el = document.getElementById("breakup");
    el.setAttribute("class", "hidden");

    el = document.getElementById("datequestion");
    el.setAttribute("class", "hidden");

    el = document.getElementById("olivegarden");
    el.setAttribute("class", "hidden");

    el = document.getElementById("bloomingonion");
    el.setAttribute("class", "hidden");

    el = document.getElementById("weekgoing");
    el.setAttribute("class", "hidden");
};

$("#chY").click(function () {
    /* Yes to Chipolte in last 5 days = breakup */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#breakup").removeClass("hidden");
    $("#chN").off("click");
    $("#chN").css("display", "none")
});

$("#chN").click(function () {
    /* No to Chipotle in last 5 days = Chipotle */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#chipotle").removeClass("hidden");
    $("#chY").off("click");
    $("#chY").css("display", "none")
});

$("#breakY").click(function () {
    /* Yes to Breakup = Sonic */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#sonic").removeClass("hidden");
    $("#breakN").off("click");
    $("#breakN").css("display", "none")
});

$("#breakN").click(function () {
    /* No to Breakup = Ask about day of the week */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#datequestion").removeClass("hidden");
    $("#breakY").off("click");
    $("#breakY").css("display", "none")
});

$("#dateM").click(function () {
    /* Monday to Date = Ask about Olive Garden */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#olivegarden").removeClass("hidden");
    $("#dateT").off("click");
    $("#dateS").off("click");
    $("#dateT").css("display", "none");
    $("#dateS").css("display", "none");
});

$("#dateT").click(function () {
    /* Thursday to Date = Ask about her week */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#weekgoing").removeClass("hidden");
    $("#dateM").off("click");
    $("#dateS").off("click");
    $("#dateM").css("display", "none");
    $("#dateS").css("display", "none");
});

$("#dateS").click(function () {
    /* Sat to Date = Chocolate */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#chocolate").removeClass("hidden");
    $("#dateM").off("click");
    $("#dateT").off("click");
    $("#dateM").css("display", "none");
    $("#dateT").css("display", "none");
});

$("#ogHate").click(function () {
    /* Hates Olive Garden = Ask About Blooming Onion */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#bloomingonion").removeClass("hidden");
    $("#ogOK").off("click");
    $("#ogOK").css("display", "none");
});

$("#ogOK").click(function () {
    /* OK Olive Garden = then Olive Garden */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#ogarden").removeClass("hidden");
    $("#ogHate").off("click");
    $("#ogHate").css("display", "none");
});

$("#blY").click(function () {
    /* Blooming Onion Yes = Outback */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#outback").removeClass("hidden");
    $("#blN").off("click");
    $("#blN").css("display", "none");
});

$("#blN").click(function () {
    /* Blooming Onion No = Chillis */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#chili").removeClass("hidden");
    $("#blY").off("click");
    $("#blY").css("display", "none");
});

$("#wkH").click(function () {
    /* Week Horribly = KFC */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#kfc").removeClass("hidden");
    $("#WkD").off("click");
    $("#wkD").css("display", "none");
});

$("#wkD").click(function () {
    /* Week decently = Panera */
    $(this).addClass("selected");
    $(this).css("color", "white");
    $("#panera").removeClass("hidden");
    $("#wkH").off("click");
    $("#wkH").css("display", "none");
});