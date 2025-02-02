import {AuthProvider} from "./context/AuthContext";
import {HomePage} from "./page/HomePage";

/**
 * Main method of the application.
 *
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <AuthProvider>
      <HomePage/>
    </AuthProvider>
  );
}

export default App;
