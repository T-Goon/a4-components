import React from "react";

const RegisterPage = () => {

    
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 offset-md-2 col-md-8">
                    <div class="p-5 mb-4 bg-light rounded-3 border">
                        <h2 class="text-center">Register</h2>
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                {/* <!-- Register form --> */}
                                <form action="/register" method="POST">
                                    <div class="form-group">

                                        <label class="small mb-1 mt-3" for="username">Username: </label>
                                        <input class="form-control" placeholder="Enter Your Username" name="username" type="text" required
                                            value={formData ? formData.username : ''} />
                                        {
                                            errors && errors.username &&
                                            <p class="small text-danger">{errors.username}</p>
                                        }

                                        <label class="small mb-1 mt-3" for="password">Password: </label>
                                        <input class="form-control"
                                            placeholder="Password" name="password" type="password" value="" required />

                                        <label class="small mb-1 mt-3" for="password">Confirm Password: </label>
                                        <input class="form-control"
                                            placeholder="Confirm Password" name="confirmPassword" type="password" value="" required />
                                        {
                                            errors && errors.password &&
                                            <p class="small text-danger">{errors.password}</p>
                                        }

                                        <button class="mt-3 btn btn-primary" type="submit">Register</button>

                                        <p class="bg-dark rounded rounded-5 mt-3 p-2 d-flex align-items-center">
                                            <i class="fa fa-github text-light fa-3x"></i>
                                            <a href="/auth/github" class="link-info ms-3" >Login with Github</a>
                                        </p>

                                        <p class="bg-dark text-light p-2 my-2 rounded rounded-5" >Already have an account?
                                            <a href="/login" class="link-info"> Log in here</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;