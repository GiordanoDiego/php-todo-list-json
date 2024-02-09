<?php
    /*
        1) PRENDO I DATI DAL FILE JSON
        2) DICO AL BROWSER CHE IL TIPO E' JSON E NON SEMPLICE HTML
        3) STAMPO IN PAGINA IL CONTENUTO DEL FILE JSON
    */

      $alldata = file_get_contents("todo-list.json");
      header("Content-Type: application/json");
      echo $alldata;

        //file_get_contents("perscorsofile/nomefile") -> serve per leggere un file con php, trasformerà tutto il file in una lista
?>