export default function TestimonialCard() {
    return <>
        <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden">
                <img
                    className="w-[172px] mb-8"
                    src="data:image/png;base64,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"
                ></img>
            </div>
            <p className="italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                ab ullam voluptatum soluta, modi excepturi, itaque fugiat dolores
                neque vitae quidem aliquid nesciunt culpa inventore ea enim voluptas
                tempora dicta facilis tempore laboriosam. Obcaecati velit veniam
                quia illum aperiam voluptas quaerat unde ab repellat modi ullam
                magni itaque officiis, eos, magnam laboriosam eaque! Molestias,
                necessitatibus! Non ab beatae fuga exercitationem dolores porro
                cumque consectetur impedit laudantium consequuntur mollitia quas
                qui, rerum aliquam ipsam voluptas quam explicabo iusto laborum eius
                doloribus. Sapiente maxime id eos, nemo dolorum animi quo, dicta,
                fugiat similique officia optio! Rerum sequi possimus magnam
                repudiandae aliquam hic!
            </p>
        </div>
    </>
}