
"use client"

import { ICv, Templates } from "@/lib/types/cv"
import { useState, useRef, useEffect } from "react"

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Basic from "./templates/Basic"
import Modern from "./templates/Modern"

type Props = {
    cv: ICv
}

export default function CvTemplatePicker({ cv }: Props) {

    const [active, setActive] = useState<Templates>("Modern")
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const basicRef = useRef<HTMLDivElement>(null);
    const modernRef = useRef<HTMLDivElement>(null)

    const handleExportPDF = () => {

        let containerElement: HTMLDivElement | null;

        if (active === "Basic" && basicRef.current) {
            containerElement = basicRef.current;
        } else if (active === "Modern" && modernRef.current) {
            containerElement = modernRef.current;
        } else {
            // Handle case when ref is not yet available
            return;
        }

        if (containerElement) {
            html2canvas(containerElement, {
                scale: 1.5
            })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 2.0)
                
                const componentWidth = canvas.offsetWidth
                const componentHeight = canvas.offsetHeight 

                const orientation = componentWidth >= componentHeight ? 'l' : 'p'

                const pdf = new jsPDF({
                    orientation,
                    unit: "px"
                })

                pdf.internal.pageSize.width = width
                pdf.internal.pageSize.height = height

                pdf.addImage(imgData, 'PNG', 0, 0, width, height)
                pdf.save(`${name}.pdf`)

            })
        }
    };

    useEffect(() => {
        if (basicRef.current !== null) {
            setHeight(basicRef.current.clientHeight)
            setWidth(basicRef.current.clientWidth)
        }

        if (modernRef.current !== null) {
            setHeight(modernRef.current.clientHeight)
            setWidth(modernRef.current.clientWidth)
        }
    }, [active])
    

    return (
        <div className="h-auto w-full flex items-center justify-center flex-col mb-[100px]">
            <div className="h-auto] w-full flex items-center justify-center mb-[30px]">
                <button className={`h-[35px] px-[15px] border ${active === "Basic" ? "border-active font-bold" : "border-border"} flex items-center justify-center rounded-sm text-[16px] text-text mr-[10px]`} onClick={() => setActive("Basic")}>Basic</button>
                <button className={`h-[35px] px-[15px] border ${active === "Modern" ? "border-active font-bold" : "border-border"} flex items-center justify-center rounded-sm text-[16px] text-text`} onClick={() => setActive("Modern")}>Modern</button>
            </div>
            <div className="h-auto xs:w-[95%] md:w-[700px] lg:w-[900px] border border-border rounded-sm relative">
                { active === "Basic" ? <Basic ref={basicRef} cv={cv} /> : active === "Modern" ? <Modern ref={modernRef} cv={cv} /> : null }
                <button className="h-[40px] px-[15px] border border-active bg-active absolute top-[10px] right-[10px] rounded-sm text-text font-bold" onClick={handleExportPDF}>Export to PDF</button>
            </div>
        </div>
    )
}