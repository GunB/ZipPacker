function WhatBrowser() {

    var browser = (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) ? "Opera" :
            typeof InstallTrigger !== 'undefined' ? "Firefox" :
            (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) ? "Safari" :
            !!window.chrome ? "Chrome" : "IE";
    console.log(browser);
    
    return browser;
}

function RepairPDFIcon(){
    
    var pdf_icon = $(".dws-pdf");
	var pdf_acces = $("a[href='assets/sena/downloads/accessibility.pdf'] img");
    
    switch(WhatBrowser()){
        case "IE":
            pdf_icon.css({
                height: "100%"
            });
			pdf_acces.css({
                height: "100%"
            });
            break;
        default:
            break;
    }
}

function backgroundChange() {
    var image = $(".dr1-image").attr("src");
    if (typeof image !== "undefined") {
        $(".dr1-image").css("display", "none");
        var css = {
            "background": "url(" + image + ")",
            "background-image": "url(" + image + ")"
        };
        $("#main").css(css);
    }
}

function numerationChange() {
    var cont = 0;
    $(".instruction-chevron").each(function () {
        cont++;
        var that = $(this);
        that.text(" " + cont);
        that.css({width: "auto"});
    }).css({"left": "-3.3rem"});
    $(".exercise-specific-instructions .instruction-row").css("margin-left", "2rem");
    $(".question-counter").css("display", "none");
    $(".instruction-chevron").css("line-height", "1.7rem");
}

function changeHelpCapital() {
    //console.log("asd");
    $(".help-bold-text").each(function () {
        var that = $(this);
        console.log(that.html());
        var txt = that.html();
        txt = txt.toLowerCase();

        var capitalized = txt[0].toUpperCase() + txt.substring(1);
        console.log(capitalized);

        that.html(capitalized);
    });
}

$('body').on('CanadaEndsFramework', function () {
    //alert();
    backgroundChange();
    //numerationChange();
    changeHelpCapital();
    RepairPDFIcon();
});