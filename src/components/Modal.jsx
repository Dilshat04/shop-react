import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';




const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(5, 'Имя минимум 5 символов!')
        .max(50, 'Имя максимум 50 символов!')
        .required('Поле не может быть пустым'),
    email: Yup.string()
         . email('Email в формате: name@email.com')
        .min(5, 'Почта минимум 5 символов!')
        .max(50, 'Почта максимум 50 символов!')
        .required('Поле не может быть пустым'),
    password: Yup.string()
        .min(5, 'Пароль минимум 5 символов!')
        .max(50, 'Пароль максимум 50 символов!')
        .required('Поле не может быть пустым'),
});





const Model = () => {
  return (   
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>

                    <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                console.log(values);
                            }}
                            >
                            {({ errors, touched,handleChange }) => (
                         
                                <Form>
                                        <input 
                                            type="text"
                                            class="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="fullName"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                        />
                                        {errors.fullName && touched.fullName? (
                                        <div style={{color:'red'}}>{errors.fullName}</div>
                                        ) : null}


                                        <input 
                                            type="text"
                                            class="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="email"
                                            placeholder="Email" 
                                            onChange={handleChange}
                                        />
                                           {errors.email && touched.email? (
                                           <div style={{color:'red'}}>{errors.email}</div>
                                             ) : null}

                                        <input 
                                            type="password"
                                            class="block border border-grey-light w-full p-3 rounded mb-4"
                                            name="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                        />
                                           {errors.password && touched.password? (
                                           <div style={{color:'red'}}>{errors.password}</div>
                                              ) : null}

                                        <button
                                            type="submit"
                                            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                                        >Create Account</button>
                                </Form>

                        )}
                    </Formik>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>

    
  )
}

export default Model