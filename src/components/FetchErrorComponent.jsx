import "../styles/interactive.css";

export default function FetchErrorComponent() {
    return (
        <div className="interactive error">
            <span>An error was encountered!</span>
            <a href="/">Try Again</a>
        </div>
    )
}