import Link from "next/link";
import GradientText from "../gradient-text";
import Motioned from "../motioned"
import {GrWorkshop, GrBusinessService} from "react-icons/gr";
const Work: React.FC = () => {
    return (
        <Motioned.container className="w-full h-screen mx-auto grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12" id="index-work">
                <>
                    <Motioned.container className="w-full h-full flex flex-col justify-center bg-dark text-light lg:col-span-3 xl:col-span-4 p-8 lg:px-16">
                            <Motioned.content>
<>                                <h3 className="flex flex-col space-y-1 mb-8">
                                    <GradientText className="text-3xl md:text-4xl lg:text-5xl font-pop font-bold " />
                                    <span className="text-2xl md:text-3xl lg:text-4xl">services that can move your customers.</span>    
                                </h3>
                                <div className="flex flex-col space-y-4">
                                    <Link href="/services">
                                        <a className="px-8 py-3 rounded-xl bg-sunflower/10 text-tangerine text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-sunflower/20">
                                            <span>Services For You</span>
                                            <span className="p-2 rounded-xl bg-tangerine">
                                        <GrBusinessService className="text-light" />
                                        </span>
                                        </a>
                                    </Link>
                                    <Link href="/services">
                                    <a className="px-8 py-3 rounded-xl bg-tangerine/10 text-sunflower text-lg font-pop font-medium flex justify-between items-center transition-all hover lg:hover:bg-tangerine/20">
                                        <span>Our Works</span>
                                        <span className="p-2 rounded-xl bg-sunflower">
                                        <GrWorkshop className="text-light" />
                                        </span>
                                    </a>
                                    </Link>

                                </div></>
                            </Motioned.content>
                    </Motioned.container>
                    <Motioned.container className="w-full h-full flex flex-col justify-center bg-silver text-dark lg:col-span-5 xl:col-span-8 p-8 lg:px-16">
                        <p>Hey</p>
                    </Motioned.container>
                </>
        </Motioned.container>
    )
}
export default Work;