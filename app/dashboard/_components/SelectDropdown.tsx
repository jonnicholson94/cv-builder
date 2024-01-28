
import * as Select from "@radix-ui/react-select"

type Props = {
    children: React.ReactNode
    list: string[]
    state: string
    setState: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectDropdown({ children, list, state, setState }: Props) {

    const handleValueChange = (value: string) => {
        if (value !== state) {
            setState(value);
        }
    }

    return (
        <Select.Root onValueChange={handleValueChange}>
            <Select.Trigger className="h-auto flex-grow flex items-center justify-start">
                { children }
            </Select.Trigger>
            <Select.Portal>
                <Select.Content position="popper" className="h-[200px] p-[10px] bg-altBg flex items-start justify-start flex-col overflow-scroll border border-border rounded-md" sideOffset={5}>
                    { list.map((l, i) => {
                        return (
                            <Select.Item className="min-h-[30px] w-full flex items-center justify-start hover:bg-hover border border-altBg hover:border-border rounded-sm px-[10px] cursor-pointer" key={i} value={l}>
                                <p className="h-auto w-full text-[12px] text-text">{l}</p>
                            </Select.Item>
                        )
                    })}
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}