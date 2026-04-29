<?php
session_start();
echo "<h3>PHP Session Debugger</h3>";
echo "<strong>Your Session ID:</strong> " . session_id() . "<br><br>";
echo "<strong>What PHP remembers right now:</strong><br>";
echo "<pre>";
print_r($_SESSION);
echo "</pre>";
?>