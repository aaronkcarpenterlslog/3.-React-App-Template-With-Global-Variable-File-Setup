const Form = (props) => {
  return (
    <>
      <p>
        This Is A Login Form That Will be Imported Into The Page That Needs It
        <h3>{props.formType} Form</h3>
        <header>Username</header>
        <input />
        <header>Password</header>
        <input />
      </p>
    </>
  );
};

export default Form;
