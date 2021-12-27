var h = 2, m = 39, s = 60;
function time(){
	var d = new Date();
    document.getElementById('zegar').innerHTML = (check(h-d.getHours(),'h ')+check(m-d.getMinutes(),'m ')+check(s-d.getSeconds(),'s '));
}

function check(i, l){
	if(i>0){
		if(i<10) i = '0'+i;
		return i+l;
	}
	return '';
}
setInterval("time();", 500);