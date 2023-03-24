
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        {{-- Include bootstrap CSS CDN here --}}
        <link rel="stylesheet" href="{{ mix('resources/css/app.css') }}">
        <link rel="stylesheet" href="{{ mix('resources/sass/canvas-ui.scss') }}">
        <link rel="stylesheet" href="{{ mix('resources/css/app.css') }}">


        {{-- <style>
            body {
                font-family: 'Nunito';
                background-color:rgb(75, 80, 149); 
            }
        </style> --}}

    </head>

    <body>

        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">{{config('app.name','lsapp')}}</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="/posts">Posts</a></li>
                        {{-- <li><a href="/posts/{post}/edit">Edit Post</a></li>
                        <li><a href="/posts/{post}/create">Create post</a></li> --}}
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <script src="{{ mix('resources/js/app.js') }}"></script>
            @yield('content')
            {{-- <li><a href="{{ route('post.index') }}">Blog</a></li> --}}
        </div>

    </body>
    {{-- //Include bootstrap JS CDN here  --}}
    <link rel="stylesheet" href="{{ mix('sass/canvas-ui.scss') }}">

</html>


