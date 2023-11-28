<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Login</title>
     <meta name="csrf-token" content="{{ csrf_token() }}"/>
	 
	    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">
        <link rel="stylesheet" href="assets/css/animate.min.css">
    
     {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
     <link rel="stylesheet" href="{{URL::asset('css/login.css')}}"> --}}

	</head>
<body>
	
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			
			
			{{-- <div class="card-header text-center h-100"> --}}
				<img src="{{ asset('img/adminlogo.png') }}" alt="Biz Logo" class="custom-image">

				{{-- <h3>Member Login</h3> --}}
        
				{{-- <div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div> --}}
			{{-- </div> --}}
			<div class="card-body">
				<form action="{{ route('login') }}" method="post">

					    @if ($errors->any())
							<div class="alert alert-danger" role="alert">	
							@foreach ($errors->all() as $error)
								{{ $error }}
								@endforeach
							</div>
						@endif
                                        
					@csrf
					
					<div class="input-group form-group form-outline">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Username" id="username" name="username" />
						<label class="form-label" for="username"></label>
					</div>

					<div class="input-group form-group form-outline">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="Password" id="pass" name="pass">
						<label class="form-label" for="pass"></label>
					</div>

				
					<div class="form-group ">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account yet?<a href="#" style="color: rgb(255, 144, 0)">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#" style="color: rgb(255, 144, 0)">Forgot Username or Password?</a>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>

<script type="text/javascript" src="{{ URL::asset('jquery/jquery-3.6.4.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('jquery.validate/jquery.validate.min.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('js/payment.js') }}"></script>
