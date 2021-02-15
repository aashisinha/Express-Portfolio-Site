/** menu.js | Aashi Sinha| 301151250| Feb 15, 2021 */

$(document).ready(function(){
	var element = $('meta[name="active-menu"]').attr('content');
	$('#' + element).addClass('active');
});
