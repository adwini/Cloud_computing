<!DOCTYPE html><html lang="en">
    <head><meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <title>Administrator</title>

        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">
        <link rel="stylesheet" href="assets/css/animate.min.css">
    
    </head>
    <body>
    <div class="bg-image" 
     style="background-image: url('https://elite.luxvt.com/wp-content/uploads/2020/04/Zoom_BG7_Skyline-View.jpg');
            height: 100vh">

        <nav class="navbar navbar-dark navbar-expand-md sticky-top py-3" id="mainNav" style="background: url(&quot;https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fmymeadowreport.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fimg_4343.jpg%3Ffit%3D1000%252C667%26ssl%3D1&amp;tbnid=uFH8mqdqq9NJcM&amp;vet=12ahUKEwjn6Nrs4Nj-AhW5rVYBHUdXA10QMygLegUIARCAAg..i&amp;imgrefurl=https%3A%2F%2Fmymeadowreport.com%2Freneefishman%2F2020%2Fwhy-you-should-do-a-pink-cloud-dance%2F&amp;docid=m3W-UJ1H7ApVaM&amp;w=1000&amp;h=667&amp;q=clouds&amp;hl=en-US&amp;ved=2ahUKEwjn6Nrs4Nj-AhW5rVYBHUdXA10QMygLegUIARCAAg&quot;);">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="/">
                </a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                    <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon">
                        </span></button>
                        {{-- <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="navbar-nav mx-auto">
                                </ul><a class="btn btn-primary shadow" role="button" href="/register">Sign up</a>
                            </div> --}}
                        </div>
                    </nav><section class="py-5" style="background: var(--bs-border-color-translucent);overflow: auto;">
                        <div class="container py-5">
                            <div class="row bounce animated mb-4 mb-lg-5">
                                <div class="col-md-8 col-xl-6 text-center mx-auto">
                                    {{-- <p class="fw-bold text-success mb-2" style="font-size: 22px;">Login</p> --}}
                                    {{-- <h2 class="fw-bold text-primary">Administrator</h2> --}}
                                </div>
                            </div>
                            
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-6 col-xl-4 " >
                                <div class="card" style="background-color: rgba(208, 194, 194, 0.258)">
                                    <div class="card-body text-center d-flex flex-column align-items-center">
                                        <div class="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
                                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                                            </svg>
                                            {{-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                                <path d="M484.6 62C502.6 52.8 522.6 48 542.8 48H600.2C627.2 48 645.9 74.95 636.4 100.2C618.2 148.9 582.1 188.9 535.6 212.2L262.8 348.6C258.3 350.8 253.4 352 248.4 352H110.7C101.4 352 92.5 347.9 86.42 340.8L13.34 255.6C6.562 247.7 9.019 235.5 18.33 230.8L50.49 214.8C59.05 210.5 69.06 210.2 77.8 214.1L135.1 239.1L234.6 189.7L87.64 95.2C77.21 88.49 78.05 72.98 89.14 67.43L135 44.48C150.1 36.52 169.5 35.55 186.1 41.8L381 114.9L484.6 62zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480z">
                                                    </path>
                                                </svg> --}}
                                            </div>

                                    <form action="{{ route('login') }}" method="post">

                                      @if ($errors->any())
                                        <div class="alert alert-danger" role="alert">
                                           
                                                @foreach ($errors->all() as $error)
                                                    {{ $error }}
                                                 @endforeach
                                            
                                        </div>
                                    @endif
                                        
                                                @csrf
                                                <div class="mb-3">
                                                    <input class="form-control" 
                                                        type="text" 
                                                        name="username" 
                                                        placeholder="Administrator" 
                                                        required
                                                        id="username"
                                                        {{-- value="{{ old('email') }}"
                                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
                                                        required title="Please enter a valid email address" --}}
                                                        >
                                                        
                                                    {{-- <span class="text-danger">
                                                        @error('email')
                                                            <div>{{ $message }}</div>
                                                        @enderror
                                                    </span>  --}}
                                                     
                                                </div>

                                                <div class="mb-3">
                                                    <input class="form-control"
                                                    type="password" 
                                                    name="pass" 
                                                    required
                                                    id="pass"
                                                    placeholder="Password" 
                                                    {{-- required title="Password must contain at least 8 characters, including at least one letter and one number." --}}
                                                    >
                                                    {{-- <span class="text-danger">
                                                        @error('password')
                                                            <div>{{ $message }}</div>
                                                        @enderror
                                                    </span>  --}}

                                                </div>
                                               

                                                <div class="mb-3">
                                            <button class="btn btn-primary shadow d-block w-100" type="submit">Log in</button>
                                                </div><p class="text-muted">
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </section>

                        {{-- <script src="assets/bootstrap/js/bootstrap.min.js">
                        </script>
                        <script src="assets/js/bs-init.js">
                        </script>
                        <script src="assets/js/bold-and-dark.js">
                        </script> --}}

                    </div>
                         
                        </body>
                        </html>
                        
<script type="text/javascript" src="{{ URL::asset('jquery/jquery-3.6.4.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('jquery.validate/jquery.validate.min.js') }}"></script>
{{-- <script type="text/javascript" src="{{ URL::asset('js/payment.js') }}"></script> --}}
