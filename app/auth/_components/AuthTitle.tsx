
type Props = {
    content: string
}

export default function AuthTitle({ content }: Props) {
    return (
        <h2 className="h-auto w-full text-[18px] text-text font-bold mb-[30px]">{content}</h2>
    )
}