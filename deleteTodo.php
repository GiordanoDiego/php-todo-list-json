<?php

// Recuperare tutti i todo attualmente esistenti (con file get contents)
$allTodoJson = file_get_contents("todo-list.json");

// Trasformare la stringa JSON corrispondente ai todo attualmente esistenti
$allTodo = json_decode($allTodoJson, true);


// Rimuvo elemento nell'array 

array_splice($allTodo, $_POST["position"], 1);

// Ri-trasformare l'array in una stringa JSON
$allTodoJsonNew = json_encode($allTodo);

// Scrivere la stringa JSON nel file todos. json
file_put_contents('todo-list.json', $allTodoJsonNew);

echo json_encode([
    'meassage' => 'OK',
    'code' => 200
]);

?>

