import { skillText } from "@/constants"

export default function Skill() {
  return (
    <section id="skill">
    <div className="skill__inner">
        <div className="skill__title">
            <h2>Challenge <em>my portfolio</em></h2>
        </div>
        <div className="skill__desc">
        {skillText.map((text,key)=>(
            <div key={key}>
                <span>{key+1}.</span>
                <h3>{text.title}</h3>
                <p>{ text.desc }</p>
            </div>
        ))}
        </div>
    </div>
</section>
  )
}
