<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $n1 = 3;
        $n2 = 2;
        $m = ($n1 + $n2)/ 2;
        $soma = $n1 + $n2;
        echo "A soma de $n1 e $n2 é $soma";
        echo "<br> A subtração vale ". ($n1-$n2);
        echo "<br> A multiplicação vale ". ($n1*$n2);
        echo "<br> A divisão vale ". ($n1/$n2);
        echo "<br> O modulo vale ". ($n1%$n2);
        echo "<br> A media vale $m <br>";
        
        $a = $_GET["a"];
        $b = $_GET["b"];

        echo "a = $a <br>b = $b";
    ?>
</body>
</html>