$('.tabs-link').on('click', function() {
	$('.tabs-link').removeClass('active');
	$(this).addClass('active');
	var tabNumber = $(this).attr('data-tab-number');
	$('.tabs-item').removeClass('active');
	$('.tabs-item[data-tab-number="' + tabNumber + '"]').addClass('active');
});