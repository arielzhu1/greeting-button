import "./styles.css";

function GreetingButton() {
  function sayHello() {
    console.log("hello");
  }

  return (
    <div>
      <button onClick={sayHello}>Click me!</button>
    </div>
  );
}

export default GreetingButton;
