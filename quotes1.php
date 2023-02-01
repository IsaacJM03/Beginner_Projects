<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
        font-family: 'Noto Sans', sans-serif;
        color: #09003f;
        }

        h1, h2, h3, h4 {
        font-family: 'Brush Script MT';
        text-align: center;
        text-decoration: underline wavy;  
        text-decoration-color: cyan; 
        } 
        body {
        background-color: #cad1f2;
        text-align: center;
        }

        .container > div {
        margin: 20px auto;
        }

        hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        }

        
    </style>
</head>
<body>
    
</body>
</html>

<?php
echo '<h1>'.'<span style="color: 0000FF; font-size: 50px;">'."Welcome to the Total Football website!".'</h1>'."<br>";

$quotes_array = [
    "Playing football is very simple, but playing simple football is the hardest thing there is.",

    "Quality without results is pointless. Results without quality is boring.",

    "Every disadvantage has its advantage.",

    "I have seen the future and it is much like the present, only longer.",

    "In football, everything is complicated by the presence of the opposite team.",

    "Why couldn't you beat a richer club? I've never seen a bag of money score a goal.",

    "The team that is prepared to play the best football will always be the champion.",

    "A good player has to be prepared to work for the team and not just for himself.",
    "The perfect match is one in which the opposition is of exactly the same level as your own team.",

    "You can't score a goal if you're not a good passer.",

    "Speed is often confused with insight.",

    "The only thing that makes it possible to play at top level for so many years is that you love the game.",

    "The game of life is a lot more difficult than a football match.",

    "The problem with football is that everyone thinks they're a coach.",

    "If you have a bad game, it's your own fault. If you have a good game, it's down to the team.",

    "You have to be 100% fit, otherwise you can't play football.",

    "The secret is to believe in your dreams; in your potential that you can be like your star, keep searching, keep believing and don’t lose faith in yourself.",

    "When you play football as a child, you don't play for victories, you play for fun.",

    "I'm not a prophet, I just think differently.",

    "You can't teach someone to be a good football player, they have to have the qualities within them.",





];

$totalquotes = count($quotes_array);
$random_quotes = rand(0, ($totalquotes) - 1);

echo '<span style="color: red;font-size: 30px;">'."$quotes_array[$random_quotes]".'<br>';
echo '<br>';
echo '<br>';
echo '<span style="color: blue; font-family: "Times New Roman", Times, serif; font-size:28px;">' . "By Johan Cruyff(R.I.P)";