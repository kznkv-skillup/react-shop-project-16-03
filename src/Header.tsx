import './Header.css'

type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
    order?: number
    background?: string
    color?: string
}

const Header = ({
    order,
    leftPart,
    text,
    rightPart,
    background = 'purple',
    color = 'white',
}: HeaderProps) => {
    return (
        <h1 className="header">
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
