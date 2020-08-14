/*$(document).ready(function(){
    		$("#mycarousel").carousel({interval:500});

    	})
    	$("#mycarousel").mouseenter(function(){
    		$("#mycarousel").carousel("pause");
    	})
    	$("#mycarousel").mouseleave(function(){
    		$("#mycarousel").carousel(options{interval:5000});
    	})*/
    	$(document).ready(function () {
    		// body...
    		$('#mycarousel').carousel({interval:2000})
    		/*$("#carousel-pause").click(function(){ 
    			$('#mycarousel').carousel('pause');
    		})
    		$("#carousel-play").click(function(){ 
    			$('#mycarousel').carousel('cycle');
    		})




    		*/
    		$('#carouselButton').click(function(){
    			if($('#carouselButton').children('span').hasClass('fa-pause'))
    			{
    				$('#mycarousel').carousel('pause');
    				$('#carouselButton').children('span').removeClass('fa-pause');
    				$('#carouselButton').children('span').addClass('fa-play');
    			}
    			else 
    			{
    				$('#mycarousel').carousel('cycle');
    				$('#carouselButton').children('span').removeClass('fa-play');
    				$('#carouselButton').children('span').addClass('fa-pause');
    			}
    		})
    		//data-toggle="modal" data-target="#loginModal"
    		$("#login1").click(function(){
    			$("#loginModal").modal('toggle');
    		})
    		$("#reserve1").click(function(){
    			$("#reserveModal").modal('toggle');
    		})
    	})
    	