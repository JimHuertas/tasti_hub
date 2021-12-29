<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SignUp</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
  </head>
  <body>

    <?php require 'header.php' ?>

    <h1>SignUp</h1>
    <span>or <a href="../index.php">Login</a></span>

    <form action="../js/signup.js" method="POST">
      <input name="email" type="text" placeholder="Enter your Username">
      <input name="password" type="password" placeholder="Enter your Password">
      <input name="confirm_password" type="password" placeholder="Confirm Password">
      <input type="submit" value="Submit">
    </form>

  </body>
</html>