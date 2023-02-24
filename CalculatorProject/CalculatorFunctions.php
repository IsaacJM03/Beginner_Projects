<?php
declare(strict_types=1);

class CalculatorFunctions
{
    private $x;
    private $y;
    private $z;
    private $operationOrder;
    public function __construct(){
        $this->x=0;
        $this->y=0;
        $this->z=0;
        $this->operationOrder=array();
    }
    public function setOrder($order){
        if (is_array($order)) {
            $this->operationOrder=$order;
        } else {
            echo "Invalid order";
        }
    }

    public function setNumbers($x,$y,$z){
        $this->x=$x;
        $this->y=$y;
        $this->z=$z;
    }
    public function calculate():float
    {
        $result=0;
        foreach ($this->operationOrder as $operation) {
            switch ($operation) {
                case 'add':
                    $result =$this->x + $this->y + $this->z;
                    break;
                case 'subtract':
                    $result =$this->x - $this->y - $this->z;
                    break;
                case 'multiply':
                    $result =$this->x * $this->y * $this->z;
                    break;
                case 'divide': #doesn't work
                    $result =$this->x / $this->y / $this->z;
                    break;
                
                default:
                    echo "Invalid Operand";
                    break;
            }
        }
        return $result;
    }
}