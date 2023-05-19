const App = () => {
    return (
        <div>
            <Tweet
                name="Scott Carey"
                username="scotty"
                date={new Date().toDateString()}
                message="I did it"
            />
            <Tweet
                name="Lenny the Dog"
                username="LennyDog"
                date={new Date().toDateString()}
                message="I am a dog"
            />
            <Tweet
                name="Tina the cat"
                username="Katzzzz"
                date={new Date().toDateString()}
                message="meow"
            />
        </div>
    );
}
