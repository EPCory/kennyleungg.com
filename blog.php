<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Kenny Leung</title>
	<link rel="icon" type="image/png" href="images/icon.png">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/main.css"/>
	<link rel='stylesheet' type='text/css' href='css/open-sans.css'>
	<script type="text/javascript" src="js/responsivetext.js"></script>
	<script type="text/javascript" src="js/imageloader.js"></script>
</head>
<body class="bg">
<?php include('html/menu.php'); ?>
<?php 

	//database server 
	define('db_server', 'localhost'); 

	//database
	$db_dbname = 'Blog'; 

	/** 
	* Run MySQL query and output  
	* results in a HTML Table 
	*/ 
	function outputQueryResults() { 
	   
	  //run a select query 
	  $select_query = 'SELECT * FROM Posts'; 
	  $result = mysql_query($select_query); 
	   
	  //output data in a table 
	  echo "<table>\n"; 
	  while ($row = mysql_fetch_row($result)){     
	      echo "<tr>\n"; 
	      foreach ($row as $val) { 
	          echo "<td>$val</td>\n"; 
	      } 
	      echo "</tr>\n"; 
	  } 
	  echo '</table>'; 
	} 

	//connect to the database server 
	$db = mysql_connect(db_server); 
	if (!$db) { 
	   die('Could Not Connect: ' . mysql_error()); 
	} else { 
	  echo "Connected Successfully...\n"; 
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