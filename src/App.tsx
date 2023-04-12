import ContextProvider from './context';
import Router from './router';

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;
