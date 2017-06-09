require([
	"common",
], function() {
	// 메인 썸네일 클릭 시
	$(".content-body>ul>.img-box").on({
		"mouseenter": function() {
			var selector = $(this);
			var darkLayer = selector.children(".dark-layer");
			darkLayer.fadeIn();
		},
		"mouseleave": function() {
			var selector = $(this);
			var darkLayer = selector.children(".dark-layer");
			darkLayer.fadeOut();
		},
	});
});
