require([
	"common",
], function() {
	// 메인 썸네일 hover event
	$(".main-thumbnail>ul>.img-box").on({
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

	// 메인 썸네일 click event
	$(".main-thumbnail>ul>.img-box").on("click", function() {
		var projectId = $(this).attr("project_id");
		$(".project-layer").css("display", "block");
		loadProjectInfo(projectId);
	});

	// project layer close btn
	$(".project-layer .close-area>img").on("click", function() {
		$(".project-layer .close-area>img.default").css("display", "none");
		$(".project-layer .close-area>img.active").css("display", "block");
		$(".project-layer").css("display", "none");
		$(".project-layer .close-area>img.default").css("display", "block");
		$(".project-layer .close-area>img.active").css("display", "none");
	});

	function loadProjectInfo(projectId) {
		var project = "";
		var work = "";
		var about = "";
		var img = "";

		if(projectId === "06") {
			project = "뷰티인미 모바일 앱 (실무)";
			work = "뷰티모바일 앱 (BANNER+PAGE)운영<br>뷰티모바일 앱 (PICK 엠블럼) 제작";
			about = "뷰티인미 모바일앱 (배너와 페이지)운영을 통해 고화질 이미지 선택과 제품 이미지를 독보이게 하는"
				+ "<br>레이아웃을 고려하여 배너 디자인 가이드를 제작하였고, 매주 고정 이벤트 페이지와 뷰티인미"
				+ "<br>'PICK 프로모션'에 활용되는 엠블럼 제작하였다.";
			img = "<img src='/img/2016_beauty_in_me_00.jpg'>"
					+ "<img src='/img/2016_beauty_in_me_02.jpg'>"
					+ "<img src='/img/2016_beauty_in_me_03.jpg'>";
		}

		$(".project-layer>.text-area>ul>li>.project-text[label=project]").html(project);
		$(".project-layer>.text-area>ul>li>.project-text[label=work]").html(work);
		$(".project-layer>.text-area>ul>li>.project-text[label=about]").html(about);
		$(".project-layer>.img-area").html(img);

		paging(projectId);
	}

	function paging(projectId) {
		var preProjectId = projectId - 1;
		var nextProjectId = projectId + 1;

		console.log(preProjectId);
		console.log(nextProjectId);

		$(".project-layer>.paging-area>.pre").on("click", function(preProjectId) {

		});

		$(".project-layer>.paging-area>.next").on("click", function(nextProjectId) {

		});
	};
});
