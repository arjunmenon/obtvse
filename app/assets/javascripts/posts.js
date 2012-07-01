$(function() {
	$('.post').fitVids();
});

$(".reply-btn").click(function() {
	$(this).parent().find('.form').toggle();
});
