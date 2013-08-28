(function($) {
	$.fn.autoGallery = function(options) {

		var defaults = {
			imgPerFrame: 2,
			spaceBetweenImages: 10,
			//navButtons: false,
			leftImg: 'http://www.oryxwebstudio.com/images/left_scroll_arrow.png',
			rightImg: 'http://www.oryxwebstudio.com/images/right_scroll_arrow.png',
			background: '#000000',
			seed: 'img'
		}

		var settings = $.extend( {}, defaults, options)

		return this.each(function() {

//PART 1 -> SET UP THE GALLERY

			//create the subwrapper for the gallery
			$(this).append('<div id="autoAllWrapper"></div>')

			//set css for subwrapper
			$('#autoAllWrapper').css({
				'overflow': 'hidden',
				'width': 0 - settings.spaceBetweenImages + $(this).width(),
				'margin': '0px auto'
			})

			//add the scroller
			$('#autoAllWrapper').append('<div id="autoScroller"></div>')

			//for each seed image, add its html
			$(this).find(settings.seed).each(function() {
				//create the item wrapper structure
				$('#autoScroller').append('<div class="autoItemWrapper"> \
						</div>')
				//clone the element into the wrapper
				$(this).clone().appendTo($('.autoItemWrapper:last'))
				//remove the original element
				$(this).remove()
			})

			//add the gallery controls
			$(this).append('<div id="galleryControls"> \
								<div id="left"> \
									<img src="' + settings.leftImg + '" alt="prev" /> \
								</div> \
								<div id="right"> \
									<img src="' + settings.rightImg + '" alt="next" style="float: right;" /> \
								</div> \
							</div>')

//PART 2 -> STYLE GALLERY

			//set the controls to fit around the gallery
			var controlWidth = 40//parseInt($('#left').width())
			
			$('#galleryControls').css({
				'width': $(this).width() + (controlWidth * 2)
			})

			//set the super wrapper width to properly fit the gallery
			$(this).css({
				'padding': '4px 0px 0px',
				'background': settings.background,
				'position': 'relative',
				'width': $(this).width() + (controlWidth * 2)//controlWidth + parseInt($(this).css('width').replace('px', ''))
			})
						
			//global var to hold # of imgs in autoScroller
			var items = $('#autoScroller').find(settings.seed).length

			//set css width for scroller
			$('#autoScroller').css('width', $(this).width() * (items / settings.imgPerFrame))
			
			//set css for everything in the box
			var box          = $(this).width() - (controlWidth * 2);
			var wrapperWidth = Math.round( box/settings.imgPerFrame );
			var imgWidth     = wrapperWidth - settings.spaceBetweenImages;
			$('.autoItemWrapper').css('width', wrapperWidth + 'px');
			$('.autoItemWrapper ' + settings.seed).css('width', imgWidth + 'px');

			//set controls position from top
			$(this).find(settings.seed).on('load', function() {
				thisHold = $(this)
				setTimeout(function() {
					$('#galleryControls').css({
						'top': (thisHold.height() - 132) / 2
					})
				}, 20)
			})
			
//PART 3 -> CREATE LISTENERS

			//global var to hold # of clicks
			var clicks = 0;

			//global var to hold movement per gallery click
			var movement = $('.autoItemWrapper').width();
			
			//global var to tell gallery that there are odd number of images, and that the gallery is out of sync
			var odd = 0;
			
			//set all the listeners

			//scroll button visibility
			$('#right').click(
				function() {
					//moves the autoScroller every time next is clicked. stops at x number of clicks
					if (clicks * settings.imgPerFrame < items - settings.imgPerFrame) {
						//if there is more than 1 item left in gallery, move full amount, otherwise move half
						console.log( items - ( (clicks+1) * settings.imgPerFrame ) )
						if ( items - ( (clicks+1) * settings.imgPerFrame) < settings.imgPerFrame && odd != 1 ) {
							console.log('shortTrig')
							$('#autoScroller').animate(
							    //NEED TO MAKE SURE THIS SCALES WITH MORE IMAGES --> SAME WITH LEFT BUTTON
								{right: '+=' + movement * (items - ( (clicks+1) * settings.imgPerFrame) ) + 'px'}, 500
							);
							//gallery out of sync with start
							odd = 1;
						}
						else {
							$('#autoScroller').animate(
								{right: '+=' + movement * settings.imgPerFrame + 'px'}, 500
							);
						}
						clicks = clicks + 1;
					}
					//next button disappears at end of gallery
					if (clicks*settings.imgPerFrame >= items - settings.imgPerFrame) {
						$('#right').css("visibility","hidden");
					}
					//prev button appears - once next is clicked, you are obviously not at the beginning of the gallery
					$('#left').css("visibility","visible");
				}
				);
			$('#left').click(
				function() {
					//moves the autoScroller every time next is clicked. disables if clicks=0
					if ((clicks <= items-1) && (clicks > 0)) {
						//if gallery is out of sync and there is one item to the left
						if (odd == 1 && clicks == 1) {
							$('#autoScroller').animate(
								{right: '-=' + movement * (items % settings.imgPerFrame) + 'px'}, 500
							);
							odd = 0;
						}
						else {
							$('#autoScroller').animate(
								{right: '-=' + movement * settings.imgPerFrame + 'px'}, 500
							);
						}
						clicks = clicks - 1;
					}
					//prev button disappears if at beginning of gallery
					if (clicks == 0) {
						$('#left').css("visibility","hidden");
					}
					//next button appears - once prev is clicked, you are obviously not at the end of the gallery anymore
					$('#right').css("visibility","visible");
				}
			);
		})
	}
})(jQuery)