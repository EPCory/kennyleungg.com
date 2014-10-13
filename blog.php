<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Kenny Leung</title>
	<link rel="icon" type="image/png" href="images/icon.png">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/main.css"/>
	<link rel="stylesheet" type="text/css" href="css/blog.css"/>
	<link rel='stylesheet' type='text/css' href='css/open-sans.css'>
	<script type="text/javascript" src="js/responsivetext.js"></script>
	<script type="text/javascript" src="js/imageloader.js"></script>
</head>
<body id="bg">
<?php include('html/menu.php'); ?>
<div id="coverWrapper">
	<div id="coverGradient"></div>
	<div id="coverPhoto" style="background-image:url('images/Blog-Header.jpg')"></div>
	<div id="coverTitle" class="light">
		<div class="titleText">The Aimless Blog</div>
		<div class="smallText">Kenny's arbritrary thoughts and opinions on just about everything</div>
	</div>
</div>
<?php 

	//database
	$db_dbname = 'Blog'; 

	/** 
	* Run MySQL query and output  
	* results in a HTML Table 
	*/ 
	function outputQueryResults() { 
	   
	  //run a select query 
	  $select_query = 'SELECT * FROM Posts ORDER BY post_timestamp DESC'; 
	  $result = mysql_query($select_query);
	while ($row = mysql_fetch_row($result)) {
		echo "<div class='blogEntryWrapper'>";  
		echo "<div class='blogEntryGradient'></div>";
		echo "<div class='blogEntryPhoto' style=\"background-image:url('$row[3]')\"></div>";
		echo "<div class='headerText light blogEntryTitle'>$row[1]</div>";
		$post_date = date_create($row[2]);
		echo "<div class='smallText light blogEntryTime'>Posted: ";
		echo date_format($post_date, 'Y-m-d');
		echo "</div>";
		echo "</div>";	
}//output data in a table 
	  //echo "<table>\n"; 
	  //while ($row = mysql_fetch_row($result)){     
	      //echo "<tr>\n"; 
	      //foreach ($row as $val) { 
	          //echo "<td>$val</td>\n"; 
	      //} 
	      //echo "</tr>\n"; 
	  //} 
	  //echo '</table>'; 
	} 
	

	//connect to the database server (plaintext creds, but read only account)
	$db = mysql_connect('localhost','public_user','public1'); 
	if (!$db) { 
	   die('Could Not Connect: ' . mysql_error()); 
	}

	//select database name 
	mysql_select_db($db_dbname); 

	//run query and output results 
	outputQueryResults(); 

	//close database connection 
	mysql_close($db) 
?> 
</body>
</html>
