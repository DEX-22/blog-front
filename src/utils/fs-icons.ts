/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret, faSun, faMoon,faComments }  from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add some pro styles */
// import { faBicycle, comments } from '@fortawesome/pro-regular-svg-icons'
// import { faEnvelope } from '@fortawesome/pro-light-svg-icons'
// import { faFeather } from '@fortawesome/pro-thin-svg-icons'
// import { faHorseSaddle } from '@fortawesome/pro-duotone-svg-icons'
// import { faAlien } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

// for (const icon in icons) {
    library.add( faSun )
    library.add( faMoon  )
// }
library.add(faComments)    


