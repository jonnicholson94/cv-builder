
type Props = {
    placeholder: "Enter your email" | "Enter your password"
    type: "email" | "password"
}

export default function AuthInput({ placeholder, type }: Props) {
    return (
        <input 
            className="h-[40px] w-full bg-altBg border border-border rounded-sm px-[15px] text-[14px] placeholder:text-placeholder text-text outline-outline mb-[15px]" 
            placeholder={placeholder}
            type={type}
            name={type} />
    )
}``