import ComponetPapa from "./ComponetPapa";
import FetchProvider from "./contex/providerFetch";

function App() {

  return (
    <>
      <FetchProvider>
        <ComponetPapa></ComponetPapa>
      </FetchProvider>
    </>
  );
}

export default App;
