import './style.css';

export function Test(props) {
    return (
        <IntroText
            title="Test"
            description={props.id}
        />
    );
}

function IntroText(props) {
    return (
        <div class="intro-text">
            <h2>{props.title}</h2>
            <p>Rendering ID {props.description} from URL</p>
        </div>
    );
    
}