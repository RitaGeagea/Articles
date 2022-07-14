import Validate from "../Validate";


test('Validate username longer than 5 characters',  () => {
    const validationOutput =  Validate({enteredValue:'candidate',inputIdentifier:"username"});
    expect(validationOutput.isValid).toBe(true);
  });

  test('Validate username shorter than 5 characters',  () => {
    const validationOutput =  Validate({enteredValue:'cand',inputIdentifier:"username"});
    expect(validationOutput.isValid).toBe(false);
  });

  test('Validate empty username',  () => {
    const validationOutput =  Validate({enteredValue:'',inputIdentifier:"username"});
    expect(validationOutput.isValid).toBe(false);
  });
  test('Validate username longer than 9 characters',  () => {
    const validationOutput =  Validate({enteredValue:'canddddddddddddd',inputIdentifier:"username"});
    expect(validationOutput.isValid).toBe(false);
  });

  test('Validate password longer than 5 characters and contains Numbers and special Char and has upper case',  () => {
    const validationOutput =  Validate({enteredValue:'P@ssw0rd',inputIdentifier:"password"});
    expect(validationOutput.isValid).toBe(true);
  });

  test('Validate password shorter than 5 characters',  () => {
    const validationOutput =  Validate({enteredValue:'pp',inputIdentifier:"password"});
    expect(validationOutput.isValid).toBe(false);
  });

  test('Validate empty password',  () => {
    const validationOutput =  Validate({enteredValue:'',inputIdentifier:"password"});
    expect(validationOutput.isValid).toBe(false);
  });

  test('Validate password longer than 5 characters and contains Numbers but not special Char nor Upper case',  () => {
    const validationOutput =  Validate({enteredValue:'Passw0rd',inputIdentifier:"password"});
    expect(validationOutput.isValid).toBe(false);
  });

  test('Validate password longer than 5 characters and contains Special Char but not numbers nor upper case',  () => {
    const validationOutput =  Validate({enteredValue:'Passw@rd',inputIdentifier:"password"});
    expect(validationOutput.isValid).toBe(false);
  });