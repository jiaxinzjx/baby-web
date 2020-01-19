//ready事件
$(function(){
	
	
	 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // 获取已激活的标签页的名称
            var activeTab = $(e.target).text();
            // 获取前一个激活的标签页的名称
            var previousTab = $(e.relatedTarget).text();
            $(".active-tab span").html(activeTab);
            $(".previous-tab span").html(previousTab);
        });
	
	
	
	var flag1=false;
	var flag2=false;
	var flag3=false;
	$("#telephone").blur(function(){
		if($(this).val().length==0){
			$("#tel_sp").html("手机号不能为空");
			flag1=false;
		}else{
			flag1=true;
		}
	});
	$("#lastname").blur(function(){
		if($(this).val().length==0){
			$("#name_sp").html("用户名不能为空");
			flag2=false;
		}else if($(this).val().length<4||$(this).val().length>10){
			$("#name_sp").html("建议4~10位");
			flag2=false;
		}else{
			flag2=true;
		}
	})
	$("#pwd").blur(function(){
		if($(this).val().length==0){
			$("#pwd_sp").html("密码不能为空");
			flag3=false;
		}else if($(this).val().length<6||$(this).val().length>16){
			$("#pwd_sp").html("为了密码安全，建议6~16位数字、字母、或符号混合");
			flag3=false;
		}else{
			flag3=true;
		}
	})
	$("#time").blur(function(){
		//alert($(this).val())
		if($(this).val()==null){
			$("#time_sp").html("该选项栏不能为空");
		}else{
			$("#time_sp").html("ok");
		}
	})
		
	$("input[type='checkbox']").change(function(){
		if($(this).get(0).checked){
			if(flag1&&flag2&&flag3){
				alert(1);
			}else{
				alert("必须正确填写一切信息");

				$(this).get(0).checked=false;
			}
		}else{
			alert(2);
		}
		
	});
	
	
	
	
	
});


