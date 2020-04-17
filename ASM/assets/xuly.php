<?php
$username=$_POST['username'];
$new_pass=$_POST['new-pass'];
$re_new_pass=$_POST['re-new-pass'];
$datebtd=$_POST['datebtd'];
$work=$_POST['work']; 
$arr=array("teo","ti","doanquocdung","dungdq","ps08542","dung");
if (in_array($username,$arr)==true) echo 1;else echo 0;

 if ($new_pass != $re_new_pass) echo 1; else echo 0;

 if ($datebtd == "") echo 1; else echo 0;

 if ($work == "") echo 1; else echo 0;

?>