const Header = () => {

    return (

        <div>
            <header className="flex flex-row justify-around py-5">
                <div>
                    <h1 className="text-stone-300">BRYCE BERCZIK</h1>
                </div>
                <div className="flex flex-row">
                    <h1 className="mx-5 text-stone-300">ABOUT ME</h1>
                    <h1 className="mx-5 text-stone-300">EXPERIENCES</h1>
                    <h1 className="mx-5 text-stone-300">PROJECTS</h1>
                    <h1 className="mx-5 text-stone-300">CONTACT ME</h1>
                </div>
                <div className="flex flex-row">
                    <h1 className="text-stone-300">D</h1>
                    <h1 className="text-stone-300">E</h1>
                </div>
            </header>
        </div>
    );
};

export default Header;