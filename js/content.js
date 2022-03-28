$(()=>{
	setInterval(()=>{

		if($("button").hasClass("ytp-ad-skip-button")){
			$("[class^='ytp-ad-skip-button']").trigger('click');			
		}

		if($("button").hasClass("ytp-ad-overlay-close-button")){
			$("[class^='ytp-ad-overlay-close-button']").trigger('click');
		}
		
	},5000);
});