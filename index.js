var disp = document.getElementById('input');
		   var opinput = document.getElementById('opinput');
		   
				function displynum(n1){
					disp.value+=n1;
				}

				function operation(op){
					disp.value += op;
				}
				function reset(val){
					disp.value = val;
				}

				function evalu(){
					result = disp.value;
					disp.value = '';
					disp.value = eval(result);
					// alert(result);
				}


// Ripple-effect animation
(function($) {
    $("span").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    })
})(jQuery);