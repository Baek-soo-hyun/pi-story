require([
	"common",
], function() {
	// var rowsPerPage = 2;
	// var pagesPerPaging = 3;
	// var currentPage = 1;

	// -----show Section----- //
	function showSection(section) {
		$(".admin-list, .admin-add, .admin-update").css("display", "none");
		section.css("display", "block");
	}

	$(".admin-menu>ul>li").on("click", function() {
		$(".admin-menu>ul>li").removeClass("active");
		$(this).addClass("active");

		var menu = $(this).attr("admin-menu");
		var list = $(".menu[admin-menu=" + menu + "]").children(".admin-list");

		showSection(list);
	});

	$(".pi-btn.add").on("click", function() {
		var menu = $(this).parents(".menu").attr("admin-menu");
		var section = $(".menu[admin-menu=" + menu + "]").children(".admin-add");
		showSection(section);
	});

	$(".btn-admin-cancel").on("click", function() {
		var menu = $(this).parents(".menu").attr("admin-menu");
		var section = $(".menu[admin-menu=" + menu + "]").children(".admin-list");
		showSection(section);
	});


	// // -----handler----- //
	// var handler = function(section, jqElement) {
	// 	if (section === ".admin-list") {
	// 		loadList(currentPage);
	// 	}
	// 	else if (section === ".admin-add") {
	// 		$("#add-category_name").val("");
	// 		$("#add-category_name").focus();
	// 	}
	// 	else if (section === ".admin-update") {
	// 		var categoryId = jqElement.attr("category-id");
	// 		$.ajax({
	// 			url: window._ctx.root + "/api/admin/category/" + categoryId,
	// 			success: function(item) {
	// 				$("#upt-category_id").val(item.category_id);
	// 				$("#upt-category_name").val(item.category_name);
	// 			},
	// 		});
	// 	}
	// };
    //
    //
	// // -----list 불러오기-----
	// function loadList(currentPage) {
	// 	$.ajax({
	// 		url: window._ctx.root + "/api/admin/category/list",
	// 		data: {
	// 			currentPage: currentPage,
	// 			rowsPerPage: rowsPerPage,
	// 		},
	// 		success: function(result) {
	// 			var list = result.list;
	// 			var count = result.count;
	// 			var itemHTML = "";
    //
	// 			for (var i=0; i<list.length; i++) {
	// 				var item = list[i];
    //
	// 				itemHTML += "<tr category-id='" + item.category_id + "'>";
	// 				itemHTML += "<td>" + (i+1) + "</td>";
	// 				itemHTML += "<td>" + item.category_id + "</td>";
	// 				itemHTML += "<td>" + item.category_name + "</td>";
	// 				itemHTML += "</tr>";
	// 			}
	// 			$(".admin-list table>tbody").html(itemHTML);
    //
	// 			// for Paging
	// 			var firstPage = 1;
	// 			var lastPage = parseInt(count / rowsPerPage)
	// 				+ (count % rowsPerPage === 0 ? 0 : 1);
	// 			// count : DB에 저장된 총 store 개수
    //
	// 			var pagingHTML = "";
    //
	// 			// 맨 처음으로 가기
	// 			pagingHTML += "<li page='" + firstPage + "'>";
	// 			pagingHTML += "<a href='#'><i class='fa fa-angle-double-left'></i></a></li>";
    //
	// 			// 하단 paging step에 시작&끝 페이지 구하기
	// 			var startPage = parseInt((currentPage-1) / pagesPerPaging)
	// 				* pagesPerPaging + 1;
	// 			var endPage = Math.min(startPage + (pagesPerPaging - 1), lastPage);
    //
	// 			// 한 칸씩 앞(이전)으로 가기
	// 			if (startPage > 1) {
	// 				pagingHTML += "<li page='" + (startPage - 1) + "'>";
	// 				pagingHTML += "<a href='#'><i class='fa fa-angle-left'></i></a></li>";
	// 			}
    //
	// 			// 현재 페이지 표시 & 페이지 개수
	// 			for (var i=startPage; i<=endPage; i++) {
	// 				pagingHTML += "<li page='" + i + "'";
    //
	// 				if (i === currentPage) {
	// 					pagingHTML += " class='active'";
	// 				}
    //
	// 				pagingHTML += "><a href='#'>" + i + "</a></li>";
	// 			}
    //
	// 			// 한 칸씩 뒤(다음)로 가기
	// 			if (endPage < lastPage) {
	// 				pagingHTML += "<li page='" + (endPage + 1) + "'>";
	// 				pagingHTML += "<a href='#'><i class='fa fa-angle-right'></i></a></li>";
	// 			}
    //
	// 			// 맨 끝으로 가기
	// 			pagingHTML += "<li page='" + lastPage + "'>";
	// 			pagingHTML += "<a href='#'><i class='fa fa-angle-double-right'></i></a></li>";
    //
	// 			$(".admin-category .paging").html(pagingHTML);
    //
	// 			// Paging 영역의 숫자(page)를 선택할 때 list 불러오기
	// 			$(".paging>li>a").on("click", function(event) {
	// 				event.preventDefault();
    //
	// 				var page = parseInt($(this).parent("li").attr("page"));
    //
	// 				loadList(page);
	// 			});
    //
    //
	// 			$(".admin-list table>tbody>tr").on("click", function() {
	// 				showSection(".admin-update", $(this), handler);
	// 			});
	// 		},
	// 	});
	// }

	// -----카테고리 추가-----
	$(".btn-admin-save").on("click", function() {
		var categoryName = $("#add-category_name").val().trim();
		var password = $("#input-password").val();

		if (categoryName === "") {
			alert("카테고리명을 입력하세요.");
			$("#add-category_name").focus();
			return;
		}

		if (password === "") {
			alert("패스워드를 입력하세요.");
			$("input-password").focus();
			return;
		}

		$.ajax({
			url: window._ctx.root + "/api/admin/category/add",
			method: "POST",
			data: {
				categoryName: categoryName,
				password: password,
			},
			success: function(result) {
				console.log(result);
				if (result === "no") {
					alert("패스워드를 확인해주세요.");
					$("input-password").focus();
					return;
				}

				var section = $(".menu[admin-menu=category]").children(".admin-list");
				showSection(section);
			},
			error: function() {
				alert("저장에 실패했습니다.");
			},
		});
	});

	// // -----카테고리 수정-----
	// $(".btn-admin-update").on("click", function() {
	// 	var categoryName = $("#upt-category_name").val().trim();
    //
	// 	if (categoryName === "") {
	// 		alert("카테고리명을 입력하세요.");
	// 		$("#upt-category_name").focus();
	// 		return;
	// 	}
    //
	// 	var categoryId = $("#upt-category_id").val();
    //
	// 	$.ajax({
	// 		url: window._ctx.root + "/api/admin/category/" + categoryId,
	// 		method: "PUT",
	// 		data: {
	// 			categoryName: categoryName,
	// 		},
	// 		success: function() {
	// 			showSection(".admin-list", null, handler);
	// 		},
	// 		error: function() {
	// 			alert("수정에 실패했습니다.");
	// 		},
	// 	});
	// });
    //
	// // -----카테고리 삭제-----
	// $(".btn-admin-delete").on("click", function() {
	// 	var categoryId = $("#upt-category_id").val();
    //
	// 	$.ajax({
	// 		url: window._ctx.root + "/api/admin/category/" + categoryId,
	// 		method: "DELETE",
	// 		success: function() {
	// 			showSection(".admin-list", null, handler);
	// 		},
	// 		error: function() {
	// 			alert("삭제에 실패했습니다.");
	// 		},
	// 	});
	// });
    //
	// loadList(currentPage);
});
