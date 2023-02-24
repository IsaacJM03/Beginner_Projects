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
    <form action ="Calculator.php" method="post">
    <label>First Number</label>
    <input type="number" name="first" placeholder="Enter first number"><br>
    <label>Second Number</label>
    <input type="number" name="second" placeholder="Enter second number"><br>
    <label>Third Number</label>
    <input type="number" name="third" placeholder="Enter third number"><br>
    <label>Order of Operation</label>
    <input type="radio" name="operationOrder[]" value="add" <?php if($_POST['operationOrder']=='add') echo 'checked="checked"'; ?> />Addition
    <input type="radio" name="operationOrder[]" value="subtract" <?php if($_POST['operationOrder']=='subtract') echo 'checked="checked"'; ?> />Subtraction
    <input type="radio" name="operationOrder[]" value="multiply" <?php if($_POST['operationOrder']=='multiply') echo 'checked="checked"'; ?> />Multiplication
    <input type="radio" name="operationOrder[]" value="divide" <?php if($_POST['operationOrder']=='divide') echo 'checked="checked"'; ?> />Division

    <br />
    <input type="submit" value="Calculate"><br>
    </form>
</body>
</html>

<?php 
require_once 'CalculatorFunctions.php';

$x= $_POST['first'];
$y= $_POST['second'];
$z= $_POST['third'];
if (isset($_POST['operationOrder'])) {
  $operationOrder = $_POST['operationOrder'];
} else {
  $operationOrder = []; // or whatever default value you want to use
}


if(empty($_POST)){
  echo "<div class='default'>Enter a valid value and operand,please</div>".'<br />';
}else{
$calculator = new CalculatorFunctions();
$calculator->setNumbers($x,$y,$z);
$calculator->setOrder($operationOrder);
$result=$calculator->calculate();

echo "<div class= 'result'>Result:$result</div>".'<br />';
}