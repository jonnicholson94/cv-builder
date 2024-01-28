
"use client"

import * as Dialog from "@radix-ui/react-dialog"

type Props = {
    children: React.ReactNode
    title: string 
    description: string
    form: React.ReactNode
}

export default function DialogPopup({ children, title, description, form }: Props) {

    return (
    <Dialog.Root>
        <Dialog.Trigger className="h-auto w-full flex items-center justify-center">
            { children }
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="h-screen w-screen bg-primaryBg fixed top-0 left-0 opacity-80" />
            <Dialog.Content className="h-auto w-[40%] bg-altBg border border-border rounded-md fixed top-[30%] left-[30%] p-[30px]">
                <Dialog.Close className="absolute top-[15px] right-[15px]">
                    <img className="h-[18px] w-[18px]" src="/assets/close.svg" alt="A cross icon to indicate the dialog can be closed" />
                </Dialog.Close>
                <Dialog.Title className="h-auto w-full text-[18px] text-text font-bold">{title}</Dialog.Title>
                <Dialog.Description className="h-auto w-full text-[14px] text-altText mt-[10px] mb-[30px]">{description}</Dialog.Description>
                {form}
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}