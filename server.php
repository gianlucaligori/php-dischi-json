<?php

header('content-type: application/json');

// Collegare con file_get_contents il file Json per far vedere tutto a schermo
$albums = file_get_contents('albums.json');

// Serve Per generare l'array da file PHP a file JSON

// Stampare a schermo l'array

echo $albums;
