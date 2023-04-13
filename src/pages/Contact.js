import React from 'react';

function Contact() {
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            let forms = document.getElementsByclassName('needs-validation');
            // Loop over them and prevent submission
            let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classNameList.add('was-validated');
            }, false);
            });
        }, false);
    return(
        <div className='container card pt-0'>
            <h2 className='is-centered'>Contact</h2>
            <form Name="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-4">
                    <label for="validationCustom01">Name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required></input>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label for="validationCustom02"></label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required></input>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label for="validationCustomUsername">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com"></input>
                        <div className="invalid-feedback">
                        Please choose a username.
                        </div>
                    </div>
                    </div>
                    <div className="mb-3">
                        <label for="validationTextarea">Textarea</label>
                        <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div className="invalid-feedback">
                        Please enter a message in the textarea.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Send Message</button>
            </form> 
        </div>
        );
};

export default Contact;