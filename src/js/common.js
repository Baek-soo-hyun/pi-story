define([
	"bootstrap",
], function() {
	// Home btn 클릭 시
	$(".site-name>img").on("click", function() {
		$(".site-name>img.default").css("display", "none");
		$(".site-name>img.active").css("display", "block");

		location.href = window._ctx.root;
	});

	// 카테고리 클릭 시
	$(".category>ul>li").on("click", function() {
		var category = $(this).attr("value");
		$(".category>ul>li").removeClass("active");
		$(".category>ul>li[value=" + category + "]").addClass("active");
		$(".main-thumbnail>ul>li").css("display", "none");
		if (category === "all") {
			$(".main-thumbnail>ul>li").css("display", "inline-block");
		}
		else {
			$(".main-thumbnail>ul>li[category=" + category + "]").css("display", "inline-block");
		}
	});
});
