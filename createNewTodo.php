<?php


// Recuperare tutti i todo attualmente esistenti (con file get contents)
$allTodoJson = file_get_contents("todo-list.json");

// Trasformare la stringa JSON corrispondente ai todo attualmente esistenti
$allTodo = json_decode($allTodoJson, true);

//creo il nuovo todo
$newTodo =[
    "task" => $_POST["task"],
    "done" => false
];
// Aggiungere nell'array il nuovo todo
$allTodo[] = $newTodo;

// Ri-trasformare l'array in una stringa JSON
$allTodoJsonNew = json_encode($allTodo);

// Scrivere la stringa JSON nel file todos. json
file_put_contents('todo-list.json', $allTodoJsonNew);

echo json_encode([
    'meassage' => 'OK',
    'code' => 200
]);

?>

