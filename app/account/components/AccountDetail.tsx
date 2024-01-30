
type Props = {
    detail: string 
    content: string
}

export default function AccountDetail({ detail, content }: Props) {
    return (
        <div className="h-auto w-full flex items-center justify-center">
            <p className="h-auto flex-grow text-altText">{detail}</p>
            <p className="h-auto flex-grow text-text">{content}</p>
        </div>
    )
}