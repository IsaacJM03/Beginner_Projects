<?php
declare(strict_types=1);
require_once 'CalculatorFunctions.php';

use PHPUnit\Framework\TestCase;

final class CalculatorTest extends TestCase
{
    public function testAddition()
    {
        $calculator = new CalculatorFunctions();
        $calculator->setNumbers(2, 3, 4);
        $calculator->setOrder(['add']);
        $result = $calculator->calculate();
        $this->assertEquals(9, $result);
    }
    
    public function testSubtraction()
    {
        $calculator = new CalculatorFunctions();
        $calculator->setNumbers(1,1,1);
        $calculator->setOrder(['subtract']);
        $result = $calculator->calculate();
        $this->assertEquals(-1, $result); #problem with this
    }

    public function testMultiplication()
    {
        $calculator = new CalculatorFunctions();
        $calculator->setNumbers(2, 3, 4);
        $calculator->setOrder(['multiply']);
        $result = $calculator->calculate();
        $this->assertEquals(24, $result);
    }
    
    public function testDivision()
    {
        $calculator = new CalculatorFunctions();
        $calculator->setNumbers(60, 5, 2);
        $calculator->setOrder(['divide']);
        $result = $calculator->calculate();
        $this->assertEquals(6, $result);
    }
    
    public function testInvalidOperand()
    {
        $calculator = new CalculatorFunctions();
        $calculator->setNumbers(2, 3, 4);
        $calculator->setOrder(['invalid']);
        $result = $calculator->calculate();
        $this->assertEquals(0, $result);
    }
}
