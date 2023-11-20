import Image from 'next/image'
import {Header} from "@/components/header";
import {Content} from "@/components/content";
import {Footer} from "@/components/footer";

export default function Home() {
  
  return (<div>
  <Header />
  <Content name="Syihab" />
  <Footer />
  </div>)
  


}

