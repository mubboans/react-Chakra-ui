import { MdPhoneIphone} from 'react-icons/md'
import { Platform } from '../interface/Games'
interface Props{
    platform: Platform[];
}
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'

import { BsGlobe } from 'react-icons/bs'
import { SiNintendo} from 'react-icons/si'
import { Icon } from '@chakra-ui/react'
const PlatformIcon = ( obj : Props[]  ) => {
    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web:BsGlobe
    }
  return (
      {
        obj.map((platform) => (
            
       <Icon as={iconMap[platform.slug]}/>
   ))}
  )
}

export default PlatformIcon