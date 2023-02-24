<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Project(Procedural)</title>
    <!-- <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script> -->
</head>
<body>
    <form action="fileupload/fileupload.php" method="post" enctype="multipart/form-data">
        Select what to upload:<br/>
        <input type="file" name="file">
        <br/>
        <input type="submit" value="Upload" name="Upload"> 
    </form>    
</body>
</html>

<?php 
// homepage
include 'config.php';
include 'fileupload/fileupload.php';

$query = $db->query("SELECT * FROM files ORDER by uploaded_on DESC");


