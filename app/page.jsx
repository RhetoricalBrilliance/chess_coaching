import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full flex">
        <div className="flex flex-col justify-center items-start w-1/2">
          <h1 className="ml-3 text-3xl font-semibold mt-10">Welcome to my coaching website!</h1>
          <p className="ml-3 mt-5">If you're looking to improve your game, <span className="text-accent"> look no further. </span> I have over 5 years of coaching experience, and over a decade of playing experience. </p>
          <p className="ml-3 mt-10"> I offer private coaching, group lessons, and training games. Check out the services page for more information, or if there's something else in particular you're interested in, let me know! Prices are negotiable. </p>
          <Link href="/contact">
            <Button size="lg" className="mt-8">
              <FiMail className="mr-2" />
              Contact
            </Button>
          </Link>
          </div>
          <div className="flex-1 flex justify-end items-start">          
            <Image src="/Naveen_CCC.PNG" className="h-128 object-cover rounded-xl" width={300} height={500}/>
          </div>
      </div>
    </section>
  )
} 

export default Home

