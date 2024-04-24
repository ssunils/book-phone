import './card.css'

interface CardProps {
    children: any;
    onClick?: () => void;
    className?: string;
    key?: string;
}

export const Card = (props: CardProps) => {
    return (
        <div className={`card shadow-lg rounded-xl grid grid-row-2 ${props.className}`} key={props.key}>
            {props.children}
            <div className="card-arrow">
                <div className="card-arrow-top-left"></div>
                <div className="card-arrow-top-right"></div>
                <div className="card-arrow-bottom-left"></div>
                <div className="card-arrow-bottom-right"></div>
            </div>
        </div>
    )
}