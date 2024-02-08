<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- FONT-FAMILY -->

        <!-- LINK CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
        <!-- TITLE PAGE -->
        <title>Todo-List</title>
    </head>

        <!-- START BODY -->
    <body class="debug" id="app">
        <!-- START MAIN HEADER -->
        <header>
            <div class="container">
                <h1 class=" text-center ">
                    {{h1Content}}
                </h1>
            </div>
        </header>
        <!-- END MAIN HEADER -->

        <!-- START MAIN -->
        <main>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ul>
                            <li v-for="allTask in task">

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        <!-- END MAIN -->

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>