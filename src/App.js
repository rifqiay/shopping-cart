import Cart from "./components/module/Cart";
import Amount from "./components/module/Amount";

function App() {
  return (
    <div className="lg:grid grid-cols-3 gap-5 w-11/12 mx-auto mt-10">
      <div className="col-span-2">
        <Cart />
      </div>
      <div className="mt-5 sm:mt-0">
        <Amount />
      </div>
    </div>
  );
}

export default App;
