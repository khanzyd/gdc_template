import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return <>
        <div className="mt-4">
            <div className="flex justify-center gap-32 bg-[#a2463B] py-16 text-white">
                <div className="flex flex-col items-center">
                    <span className="text-2xl mb-2 font-semibold">Quick Links</span>
                    <Link href="/">Home</Link>
                    <Link href="/">Departments</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact Us</Link>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl mb-2 font-semibold">Contact Us</span>
                    <div className="flex flex-col justify-evenly h-full px-2">
                        <div>
                            <h3 className="flex font-bold items-center">
                                <Image
                                    src={"/email.svg"}
                                    alt=""
                                    height={30}
                                    width={30}
                                    className="mr-2"
                                />
                                Email :
                            </h3>
                            <p className="ml-4 underline">
                                Lorem_ipsum@gmail.com <br /> GDC_aurangabad@edu.in
                            </p>
                        </div>
                        <div>
                            <h3 className="flex font-bold items-center">
                                <Image
                                    src={"/email.svg"}
                                    alt=""
                                    height={30}
                                    width={30}
                                    className="mr-2"
                                />
                                Have a question? :
                            </h3>
                            <p className="ml-4 underline">
                                call on 91+ 99990111 <br />
                                student sec: 91+ 90002101
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl mb-2 font-semibold">Visitor Counter</span>
                    <span className="text-2xl mb-2 font-semibold">193,425</span>
                </div>
            </div>
            <div className="bg-[#82261B] text-white py-4 text-center">
                © Copyright GDC 2022. Designed and Developed by MIT.
            </div>
        </div>
    </>
}