var btn1 = document.getElementById('btn1');
btn1.addEventListener('touchstart',btn1_touch_start);
btn1.addEventListener('touchend',btn1_touch_end);

function btn1_touch_start(){
	$("#status").html('touch start btn1');
};

function btn1_touch_end(){
	$("#status").html('touch end btn1');
};

