/* Standby.js */
var standbyActive = false;
var standbyTime = 0;
var standby_after = theme.standby_after;
var md = window.matchMedia("only screen and (max-width: 992px)");


if (md.matches) {
    console.log(theme.name + " - Width smaller the 992px");
}else {
    if (!isMobile) {
        $('body').bind('mousemove', function (e) {
            standbyTime = 0;
            disableStandby();
        });
    } 
}

$('body').bind('touchend click', function (e) {
    setTimeout(function () {
        standbyTime = 0;
        disableStandby();
    }, 100);
});

if (parseFloat(standby_after) > 0) {
    setInterval(function () {
        standbyTime += 5000;
        if (standbyActive != true) {
            if (standbyTime >= ((standby_after * 1000) * 60)) {
                $('body').addClass('standby');
                buildStandby();
            }
        }
    }, 5000);
}


function buildStandby(){
	standbyActive = true
	if($('.screenstandby').length==0){
		var screenhtml = '<div class="screen screenstandby" style="height:'+$(window).height()+'px"><div class="row"></div>';
		$('#main-view').hide();
		if (md.matches) {$('.container-logo').hide();} else{ $('.navbar-inner').hide();};
		$('.logo').hide();
		$('#copyright').hide();
		$('#main-view').before(screenhtml);
		$('div.screenstandby .row').append('<div id="MyDateDisplay" class="standbyDate"></div>');
		$('div.screenstandby .row').append('<div id="MyClockDisplay" class="standbyClock"></div>');
		showTime();
	
	}
}

function disableStandby() {

    if (standbyActive == true) {
        standbyTime = 0;
    }
    $('.screenstandby').remove();
    $('body').removeClass('standby');
    $('#main-view').show();
    if (theme.features.sidemenu.enabled === false){
        if (md.matches) {$('.container-logo').show();} else{ $('.navbar-inner').show();};
    }
    $('.logo').show();
    $('#copyright').show();
    standbyActive = false;
}
