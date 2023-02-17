<?php
declare(strict_types=1);

class CalculatorFunctions
{
    function add($x,$y): int{
        return $x + $y;
    }

    function sub($x,$y): int{
        return $x - $y;
    }

    function multiply($x,$y):int{
        return $x * $y;
    }

    function divide($x,$y):int{
        return $x / $y;
    }
}