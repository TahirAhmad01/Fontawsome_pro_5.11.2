<!DOCTYPE html>
<html>
<head>
	<title>fd</title>
</head>
<body>
	<div id="haha">hah dfdssssssssv faslnmlsdfksd safjkl dsd kjdsfhsafshflskjh falkf  dsjh a</div>

	<button onclick="cp('#haha')"><div id="haha">hah dfdssssssssv faslnmlsdfksd safjkl dsd kjdsfhsafshflskjh falkf  dsjh a</div></button>

	<input type="fj">


	<script src="js/jquery.min.js"></script>

	<script type="text/javascript">
		function cp(element) {
			var $temp = $("<input>");
			$("body").append($temp);
			$temp.val($(element).text()).select();
			document.execCommand("copy");
			$temp.remove();
		}

	</script>
</body>
</html>