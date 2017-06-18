require([
	"common",
], function() {
	var ENTER_KEYCODE = 13;
	$("#member-id").val("");
	$("#member-pw").val("");

	$(".btn-login").on("click", function() {
		logIn();
	});

	$(document).on("keydown", function(event) {
		if (event.keyCode === ENTER_KEYCODE) {
			logIn();
		}
	});

	function logIn() {
		var userId = $("#member-id").val();
		var userPw = $("#member-pw").val();

		if (userId === "") {
			alert("아이디를 입력하세요");
			return;
		}

		if (userPw === "") {
			alert("비밀번호를 입력하세요");
			return;
		}

		$.ajax({
			url: window._ctx.root + "/api/member/signIn",
			method: "POST",
			data: {
				userId: userId,
				userPw: userPw,
			},
			success: function(data) {
				if (data.result == "ok") {
					location.href = window._ctx.root + "/admin-category.html";
				}
				else {
					alert("아이디와 비밀번호를 확인해주세요.");
				}
			},
		});
	}
});
