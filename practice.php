<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice!</title>
</head>
    <!-- getting user input with checkboxes with relevant styling-->
    <body>
    <h1 style="color:blue"><font size = "130"><center><b><u>Menu</u><b></center></font></h1><br>
        <form action="practice.php" method="post">
            <font size = "50"> <b><i><u><center>What would you like?</center></u></b></i><br></font>
            <hr>
            <font size= "35" >Cheese</font> <input type="checkbox" name="food[]" value = "cheese"><br>
            <font size= "35" >Burgers</font> <input type="checkbox" name="food[]" value="burgers"><br>
            <font size= "35" >Pizza</font> <input type="checkbox" name="food[]" value="pizza"><br>
            <font size= "35" >Katogo</font> <input type="checkbox" name="food[]" value="katogo"><br>

            <font size = "50"><input type="submit" value="Order"></font>
            
        </form>
        <br>
 
    <?php
    
    // checking if the user has ticked a box
    function checked($post_array){
        if(empty($post_array)){
            echo 'Not Checked'."<br>";
        } else{
     }
    }
    // handling error in case box is left unticked
    set_error_handler('checked', E_WARNING);
    checked($_POST);
    $array = $_POST['food'];
    
    // loop through the array of user's input
    foreach ($array as $food)
        echo "You ordered "."$food" ."!". '<br>';

    ?>
    


    
    </body>
</html>