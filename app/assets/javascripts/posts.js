$(function() {
	$('.post').fitVids();
});

$(".reply-btn").click(function() {
	$(this).parent().parent().find('.form').toggle();
});
