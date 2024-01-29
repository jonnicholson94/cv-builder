
"use client"

import { updateSkills } from "@/app/actions"
import { ISkill } from "@/lib/types/cv"
import { useState } from "react"
import { v4 as uuid } from "uuid"

type Props = {
    id: string
    skills: ISkill[] | null
}

export default function DashboardSkillsList({ id, skills }: Props) {

    const [skillsList, setSkillsList] = useState(skills)
    const [newSkill, setNewSkill] = useState("")

    const [focused, setFocused] = useState(false)

    const handleCreate = () => {
        
        let skillsCopy = skillsList

        const skill = {
            id: uuid(),
            content: newSkill
        }

        if (skillsCopy === null) {
            skillsCopy = [skill]
        } else {
            skillsCopy.push(skill)
        }

        setNewSkill("")

        setSkillsList(skillsCopy)
        updateSkills(id, skillsCopy)

    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCreate()
        }
    }

    const handleDelete = (skill_id: string) => {
        const filteredSkills = skillsList?.filter(s => s.id !== skill_id)

        setSkillsList(filteredSkills!)
        updateSkills(id, filteredSkills!)
    }

    return (
        <>
            { skillsList?.length === 0 || skillsList === null ? <p className="h-auto w-full text-[14px] text-altText mb-[20px]">No skills added</p> :
                skillsList?.map((skill) => {
                    return (
                        <div className="h-[40px] w-full bg-altBg border border-border rounded-sm mb-[10px] px-[15px] text-text flex items-center text-[14px]" key={skill.id}>
                            <p className="flex-grow">{skill.content}</p>
                            <button className="h-[20px] w-[20px] flex items-center justify-center rounded-sm" onClick={() => handleDelete(skill.id)}>
                                <img src="/assets/close.svg" alt="A close icon to indicate a skill can be removed" />
                            </button>
                        </div>
                    )
                })
            }
            <div className={`h-[40px] w-full flex items-center justify-center bg-altBg border ${ focused ? "border-active" : "border-border" } rounded-sm`}>
                <input className="h-full flex-grow bg-altBg outline-none rounded-sm text-[14px] text-text px-[15px] placeholder:text-placeholder" onFocus={() => setFocused(true)} placeholder="Enter a skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyDown={handleKeyDown} onBlur={() => setFocused(false)} />
                <button className="h-[30px] px-[10px] border border-border rounded-sm flex items-center justify-center mx-[10px]">
                    <img className="h-[15px] w-[15px] mr-[5px]" src="/assets/enter.svg" alt="An enter icon to indicate you can hit enter to save a skill" />
                    <p className="text-text text-[12px]">Enter</p>
                </button>
            </div>
        </>
    )
}