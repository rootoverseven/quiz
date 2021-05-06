<?php
$name=$_POST["name"];
$email=$_POST["email"];
$point=$_POST["point"];
$time=$_POST["time"] . PHP_EOL;
?>
<?php
$file=fopen("a.txt","a");
fwrite($file,$name);
fwrite($file,$email);
fwrite($file,$point);
fwrite($file,$time);
fclose($file);

echo "Congrats! Your details have been submitted."

?>