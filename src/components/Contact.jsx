import { contactText } from "@/constants"

export default function Contact() {
  return (
    <section id="contact">
    <div class="contact__inner">
        <h2 class="contact__title">Contact</h2>
        <div class="contact__lines top" aria-hidden="true">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        <div class="contact__text">
            <div class="text">
            {contactText.map((con,key)=>(
                <div key={key}>
                    <a href="con.link" target="_blank">{ con.title }</a>
                </div>
            ))}
            </div>
        </div>
        <div class="contact__lines" aria-hidden="true">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    </div>
</section>
  )
}
