import {WelcomeComponent} from "../component/WelcomeComponent";
import '../index.css';

/**
 * Home page of the application.
 *
 * @returns {JSX.Element}
 */
export const HomePage = () => {
    return (
        <div className={'center-align'}>
            <h1>Welcome Component</h1>
            <WelcomeComponent/>
        </div>
    );
}