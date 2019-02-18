const FormInput = (props) => {
  return React.createElement('div', {className: "form-group form-check"}, 
      [
          React.createElement('label', 
                              {
                                  htmlFor: "exampleInputZipcode1"
                              }, 
                              "Zipcode:"
          ),
          React.createElement('input', 
                              {
                                  className: "form-control",
                                  type: "code",
                                  id: "77777",
                                  placeholder: "77777"
                              },
          ),
          React.createElement('br'),
          React.createElement('label', 
                              {
                                  htmlFor: "exampleInputEmail1"
                              }, 
                              "Email:"
          ),
          React.createElement('input', 
                              {
                                  className: "form-control",
                                  type: "email",
                                  id: "exampleInputEmail1",
                                  placeholder: "Enter email"
                              },
          ),
          React.createElement('br'),
          React.createElement('input',
                              {
                                className:"form-check",
                                type: "submit",
                                class: "btn",
                              }
          )
      ]
  );
};
