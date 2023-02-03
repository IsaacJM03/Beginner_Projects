<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Calculator</title>
    <h1><center>Calculator!</center></h1>
    <style>
      /* styling to the calculator */
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
      }
      h1{
        color:black;
      }
      
      input[type="text"] {
        font-size: 18px;
        padding: 10px;
        margin: 10px;
        width: 170px;
      }
      input[type="number"] {
        font-size: 18px;
        padding: 10px;
        margin: 10px;
        width: 170px;
      }
      
      input[type="submit"] {
        font-size: 30px;
        padding: 10px;
        margin: 10px;
        width: 150px;
        background-color: blue;
      }
      
      .result {
        font-size: 25px;
        text-align: center;
      }
      .default{
        font-size: 25px;
        text-align:center;
      }
      body{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        background-color: grey;
      }
    </style>
</head>
<body>
    <form action ="calc2.php" method="post">
    <input type="number" name="first" placeholder="Enter first number"><br>
    <input type="number" name="second" placeholder="Enter second number"><br>
    <input type="text" name="operation" placeholder="Enter operation(+,-,*,/)"><br>
    <br />
    <input type="submit" value="Calculate"><br>
    </form>
</body>
</html>

<?php 

include "/home/isaac-lino/www/functions.php";
$result = '';
if (!empty($_POST)) {
    $first = (int) trim($_POST['first']);
    $second = (int) trim($_POST['second']);
    $operation = trim($_POST['operation']);
    //switch statement to carry out operations on the figures
    switch ($operation) {
        case "+":
            $result = add($first, $second);
            echo '<br />';
            break;
        case "-":
            $result = sub($first, $second);
            echo '<br />';
            break;
        case "/":
            $result = divide($first, $second);
            echo '<br />';
            break;
        case "*":
            $result = multiply($first, $second);
            echo '<br />';
            break;
        default:
            echo 'Invalid operand'.'<br/>';
            break;
    }

}elseif(empty($_POST)){
    echo "<div class='default'>Enter a valid value and operand,please</div>".'<br />';
};

echo "<div class= 'result'>Result:$result</div>".'<br />';