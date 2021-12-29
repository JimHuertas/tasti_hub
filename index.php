<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to Tasti</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>

  <body>
    <?php require 'template/header.php' ?>

    <?php if(!empty($user)): ?>
      <br> Welcome. <?= $user['username']; ?>
      <br>You are Successfully Logged In
      <a href="template/logout.php">
        Logout
      </a>
    <?php else: ?>
      <h1>Please Login or SignUp</h1>

      <a href="template/login.php">Login</a> or
      <a href="template/signup.php">SignUp</a>
    <?php endif; ?>
  </body>
</html>