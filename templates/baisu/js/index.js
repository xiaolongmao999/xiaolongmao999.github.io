//清空输入框
$("#clear").click(function () {
	$("#search").val("");
});
//搜索引擎切换
function searchChange() {
	$(".search-change").click(function () {
		$('.search-lists').toggleClass('hide');
		console.log('1')
	});
	$(".search-lists .list").click(function () {
		var souurl = $(this).data('url');
		var text = $(this).html();
		$('.search-btn').html(text);
		$('.search-btn').attr('data-url', souurl);
		$('.search-lists').addClass('hide');
		console.log(souurl);

	});
	$(".search-btn").click(function () {
		var url = $(this).attr('data-url');
		var kw = $('#search').val();
		if (kw !== "") {
			window.open(url + kw);
		}
	});
}
searchChange();
//回车键、本地搜索
function keyClick() {
	$('body').keyup(function (e) {
		if (e.keyCode === 13) {
			var isFocus = $("#search").is(":focus");
			if (true == isFocus) {
				console.log(isFocus);
				var url = $('.search-btn').attr('data-url');
				var kw = $('#search').val();
				if (kw !== "") {
					window.open(url + kw);
				} else {
					layer.msg('', {
						time: 1000,
					});
				}
			}
		}
	});
	$("#search").focus(function (data, status) {
		$('.search-lists').addClass('hide');
	});
	$("#search").blur(function (data, status) {
		if ($("#search").val() == '') {
			$(".site-name").removeClass("hidden");
		};
	});
}
keyClick();

