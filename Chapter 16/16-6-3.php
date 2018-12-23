<?php

$callback = $_GET['jsoncallback'];
$data = '{"items": [{"title": "0.jpg","media":{"m":"images/0_m.jpg"},},{"title": "1.jpg","media":{"m":"images/1_m.jpg",},}], "callback": "'. $callback .'"}';

echo $callback . "(" . $data . ")";