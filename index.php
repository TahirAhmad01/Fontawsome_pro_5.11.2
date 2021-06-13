<?php
	$json = file_get_contents('faicons.txt');
	$icons = json_decode($json);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="scriptWritter : Rakibul-Islam , Designer: Simanto-Saikat ">
	<title>Font Awesome</title>
	<!--link rel="stylesheet" href="assets/fontawesome/5.11.2/css/all.css"-->
	<link rel="stylesheet" href="fsm/css/all.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

	<div class="loader-container">
        <div class="loader"></div>
	</div>

	<div class="go_top" id="top">
		<div></div>
		<ul>
			<li><i class="fas fa-arrow-alt-circle-up"></i></li>
			<li><p>Top</p></li>
		</ul>	
	</div>

	<header>

		<div class="header_1">
			<div class="logo">
				<h1><i class="fab fa-font-awesome"></i> <span>Font Awesome<span></h1>
			</div>
		</div>
		<div class="header_2">
			<div class="icon">
				<div class="s_inp">
					<input id="myInput" class="input" style="display: none;" type="text" placeholder="Search..">
				</div>
				<div id="search" class="s_but">
					<i class="fas fa-search"></i>
				</div>
			</div>
		</div>
		
	</header>

	<div class="table">
		<table>
			<thead id="thead">
				<tr>
					<th>Icon Name</th>
					<th>fa  <span>(same as fas)</span></th>
					<th>fad <span>(fa duotone)</span></th>
					<th>fal <span>(fa light)</span></th>
					<th>far <span>(fa regular)</span></th>
					<th>fas <span>(fa solid)</span></th>
					<th>fab <span>(fa brands)</span></th>
				</tr>
			</thead>
			<tbody id="myTable">
				<?php
				$categories = array("fa", "fad", "fal", "far", "fas", "fab");
				foreach ($icons as $icon) {
					echo "<tr>";
					echo "<td>".$icon[0]."</td>";
					foreach ($categories as $category) {
						if($category == "fab"){
							if($icon[1]){
								echo '<td class="ico"><i class="fab '.$icon[0].'"></i>'
								?>
									<div class="coppy_bar">
										<p style="font-size: 0px" id= <?php echo "\"$category$icon[0]\"" ?>><?php echo "&lt;i class=\"$category $icon[0]\"&gt;&lt;/i&gt;" ?></p>
										<button class="coppy" onclick="copyToClipboard(<?php echo "'#$category$icon[0]'" ?>)">
											<i class="fa fa-copy"></i>
										</button>
									</div>
								<?php
								'</td>';
							}else{
								echo "<td class='ico'></td>";
							}
						}else{
							if($icon[1]){
								echo "<td class='ico'></td>";
							}else{
								echo '<td class="ico"><i class="'.$category.' '.$icon[0].'"></i>'
								?>
									<div class="coppy_bar">
										<p style="font-size: 0px" id= <?php echo "\"$category$icon[0]\"" ?>><?php echo "&lt;i class=\"$category $icon[0]\"&gt;&lt;/i&gt;" ?></p>
										<button class="coppy" onclick="copyToClipboard(<?php echo "'#$category$icon[0]'" ?>)">
											<i class="fa fa-copy"></i>
										</button>
									</div>
								<?php
								'</td>';
							}
						}
					}
					echo "</tr>";
				}
				?>
			</tbody>
		</table>
	</div>
	<div id="fabs"></div>

	<footer>
		 Lazy Developers Community (LDC) <i class="fal fa-copyright"></i> 2020
	</footer>
	<!-- <script src="assets/jquery/3.5.1/jquery.min.js"></script> -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/page.js"></script>
</body>
</html>