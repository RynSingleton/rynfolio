interface ScrollTextProps {
    text: string;
    bottom?: string | number;
}

export function ScrollText({text, bottom = 0}: ScrollTextProps) {
    return(
        <div className="ticker-wrap" style={{ bottom }}>
            <div className="ticker">
                <div className="ticker__item">{text}</div>
            </div>
        </div>   
    )
}