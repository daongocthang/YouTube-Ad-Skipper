$(()=>{
	setInterval(()=>{
		if($("button").hasClass("ytp-ad-skip-button")){
			$("[class^='ytp-ad-skip-button']").trigger('click');			
		}		
	},5000);
});