$('.team-item').on('click', function() {
	$('.team-item').removeClass('active');
	$(this).addClass('active');
	var tabNumber = $(this).attr('data-tab-number');
	$('.content-item').removeClass('active');
	$('.content-item[data-tab-number="' + tabNumber + '"]').addClass('active');
});