import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (

        <div>
            <header className="flex flex-row justify-around py-5">
                <div>
                    <h1 className="text-stone-300 ">BRYCE BERCZIK</h1>
                </div>
                <div className="flex flex-row">
                    <h1 className="mx-5 text-stone-300">ABOUT ME</h1>
                    <h1 className="mx-5 text-stone-300">EXPERIENCES</h1>
                    <h1 className="mx-5 text-stone-300">PROJECTS</h1>
                    <h1 className="mx-5 text-stone-300">CONTACT ME</h1>
                </div>
                <div className="flex flex-row">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faInbox} />
                </div>
            </header>
        </div>
    );
};

export default Header;