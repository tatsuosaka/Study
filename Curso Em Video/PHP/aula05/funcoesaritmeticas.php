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
        $a = $_GET["a"];
        $b = $_GET["b"];
        echo "Valores recebidos $a e $b ";
        echo "<br>O valor absoluto de $b é " . abs($b);
        echo "<br>O valor de $a<sup>$b</sup> é " . pow($a,$b);
        echo "<br>A raoz de $a é " . sqrt($a);
        echo "<br>O valor arredondado de $a é " . round($a); // ceil (arredondar para cima) // floor (arredondar para baixo)
        echo "<br>A parte inteira de $a é " . intval($a);
        echo "<br>O valor de $a em moeda é R$" . number_format($a,2,",",".");
    ?>
</body>
</html>