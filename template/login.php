<?php

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
  </head>
  <body>
    <?php require 'header.php' ?>

    <h1>Login</h1>
    <span>or <a href="home.php">SignUp</a></span>

    <form action="home.php" method="POST">
      <input name="email" type="text" placeholder="Enter your username">
      <input name="password" type="password" placeholder="Enter your Password">
      <input type="submit" value="Submit">
    </form>
  
  </body>
</html>