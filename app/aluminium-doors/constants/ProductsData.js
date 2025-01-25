// data/products.js

import AtTwoPTwoT from "../assets/sl_at_2p_2t.png";
import AtFourPTwoT from "../assets/sl_at_4p_2t.png";
import AtSixPThreeT from "../assets/sl_at_6p_3t.png";
import AtThreePThreeT from "../assets/sl_at_3p_3t.png";
import SlGrThreePThreeT from "../assets/sl_gr_3p3t.png";
import SlGrSixPThreeT from "../assets/sl_gr_6p3t.png";
import SlGrThreePTwoT from "../assets/sl_gr_3p2t.png";
import SlGrFourPTwoT from "../assets/sl_gr_4p2t.png";
import SlWeTwoPTwoT from "../assets/sl_we2p2t.png";
import SlWeFourPTwoT from "../assets/sl_we4p2t.png";
import SlWeSixPThreeT from "../assets/sl_we6p3t.png";
import SlWeThreePThreeT from "../assets/sl_3p_3t.png";
import SlWepTwoPTwoT from "../assets/sl_wep2p2t.png";
import SlWepFourPTwoT from "../assets/sl_wep4p2t.png";
import SlWepThreePThreeT from "../assets/sl_wep3p3t.png";
import CsAtSwing from "../assets/cs_atswingwep.png";
import CsGrSwing from "../assets/cs_groutswing.png";
import CsWeSwing from "../assets/cs_weinswing.png";
import CsWepSwing from "../assets/cs_wepinswing.png";
import FrWeSwing from "../assets/fr_weswing.png";
import FrWepInSwing from "../assets/fr_wepinwing.png";
import FrWepOut from "../assets/fr_wepout.png";
import FrWeOutSwing from "../assets/fr_weoutswing.png";
import FoTwelve from "../assets/fo_12.png"
import FoSix from "../assets/fo_6.png"  
import FoEight from "../assets/fo_8.png"
import FoFour from "../assets/fo_4.png"
import Slgr2p2t from "../assets/sl_gr2p2t.png"





// FOR ALUMINIUM SLIDING DOORS
export const seriesData = [
  {
    series: "ATIS",
    products: [
      {
        imageSrc: AtTwoPTwoT,
        title: "Sliding Doors (2 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door": "2400 mm",
        },
      },
      {
        imageSrc: AtFourPTwoT,
        title: "Sliding Door (4 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "upto 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
      {
        imageSrc: AtSixPThreeT,
        title: "Sliding Door (6 Panels on 3 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "upto 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
      {
        imageSrc: AtThreePThreeT,
        title: "Sliding Door (3 Panels on 3 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "upto 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
    ],
  },
  {
    series: "Grants",
    products: [
      {
        imageSrc: SlGrThreePThreeT,
        title: "3 Panels on 3 Tracks Grants Sliding Door",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "3500 mm",
        },
      },
      {
        imageSrc: SlGrSixPThreeT,
        title: "6 Panels on 3 Tracks Grants Sliding Door",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "3420 mm",
        },
      },
      {
        imageSrc: SlGrThreePTwoT,
        title: "Sliding Door(3 Panels on 2 Tracks)SFS",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "2250 mm",
        },
      },
      {
        imageSrc: SlGrFourPTwoT,
        title: "Sliding Door(4 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "3500 mm",
        },
      },
      {
        imageSrc: Slgr2p2t,
        title: "Sliding Door(2 Panels on 2 Tracks Grants)",
        details: {
          "Frame Depth": "101.6 mm, 120 mm(2 Tracks sliding), 178 mm(3 tracks sliding)",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "3500 mm",
        },
      },
    ],
  },
  {
    series: "WE PLUS",
    products: [
      {
        imageSrc: SlWepTwoPTwoT,
        title: "Sliding Doors (2 Panels on 2 Tracks We Plus)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
      {
        imageSrc: SlWepFourPTwoT,
        title: "Sliding Doors (4 Panels on 2 Tracks We Plus)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
      {
        imageSrc: SlWepThreePThreeT,
        title: "Sliding Doors (3 Panels on 3 Tracks We Plus)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
    ],
  },
  {
    series: "WE 70",
    products: [
      {
        imageSrc: SlWeTwoPTwoT,
        title: "Sliding Doors (2 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door": "2400 mm",
        },
      },
      {
        imageSrc: SlWeSixPThreeT,
        title: "Sliding Doors (6 Panels on 3 Tracks)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door": "2400 mm",
        },
      },
      {
        imageSrc: SlWeThreePThreeT,
        title: "Sliding Doors (3 Panels on 3 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
      {
        imageSrc: SlWeFourPTwoT,
        title: "Sliding Doors (4 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "104 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "upto 13.5 mm",
          "Maximum Height of Door": "3045 mm",
        },
      },
    ],
  },
];

// FOR ALUMINIUM CASEMENT DOORS

export const casementSeriesData = [
  {
    series: "ATIS",
    products: [
      {
        imageSrc: CsAtSwing,
        title: "In-Swing Sing Door WE-Plus",
        details: {
          "Frame Depth": "72 mm(2 tracks sliding), 104 mm(3 tracks sliding)",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "5/6/8 mm",
          "Maximum Height of Door-Standard Type": "3200 mm",
        },
      },
    ],
  },

  {
    series: "GRANTS",
    products: [
      {
        imageSrc: CsGrSwing,
        title: "Out-Swing Door(Single) ",
        details: {
          "Wind Pressure": "2000 Pa",
          "Frame Depth": "101.6 mm",
          "Glass Thickness": "31.5 mm",
          "Height of Sill": "50 mm",
          "Maximum Height of Door-Standard Type Door": "3000 mm",
        },
      },
    ],
  },

  {
    series: "WE 70",
    products: [
      {
        imageSrc: CsWeSwing,
        title: "In-Swing Door (Single)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door-Standard type": "2400 mm",
        },
      },
    ],
  },

  {
    series: "WE PLUS",
    products: [
      {
        imageSrc: CsWepSwing,
        title: "In-Swing Door Sing WE-Plus",
        details: {
          "Frame Depth": "72 mm(2 tracks sliding), 104 mm(3 tracks sliding)",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "5/6/8 mm",
          "Maximum Height of Door-Standard Type": "3200 mm",
        },
      },
    ],
  },
];


// FRENCH DOORS DATA
export const frenchSeriesData = [
  {
    series: "WE 70",
    products: [
      {
        imageSrc: FrWeSwing,
        title: "In-Swing Door (Double)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door-Standard type": "3200 mm",
        },
      },
      {
        imageSrc: FrWeOutSwing,
        title: "Out-Swing Door (Double)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",

          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door-Standard type": "3200 mm",
        },
      },
    ],
  },

  {
    series: "WE PLUS",
    products: [
      {
        imageSrc: FrWepInSwing,
        title: "In-Swing Door (Double)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door-Standard Type": "3200 mm",
        },
      },
      {
        imageSrc: FrWepOut,
        title: "Out-Swing Door (Double)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door-Standard Type": "3200 mm",
        },
      },
    
    ],
  },
];


// Folding Doors
export const foldingSeriesData = [
    {
        series: "WE 70",
        products: [
          {
            imageSrc: FoTwelve,
            title: "Folding Door (12,16 Panels)",
            details: {
              "Minimum Width of Door": "6001 mm",
              "Minimum Height of Door": "650 mm",
              "Maximum width of Door": "10335 mm(For 12 Panels), 12000 mm(For 16 Panels)",
              "Maximum Height of Door": "3030 mm",
              "Height of Sill": "35 mm",
              "Glass Thickness": "5/6/8 mm",
              "Frame Depth": "72 mm",
            },
          },
          {
            imageSrc: FoEight,
            title: "Folding Door (8 Panels)",
            details: {
              "Frame Depth": "72 mm(2 Tracks Sliding), 104 mm(3 tracks sliding)",
              "Height of Sill": "35 mm",
               "Glass Groove": "11 mm",
              "Glass Thickness": "5/6/8 mm",
              "Maximum Height of Door-Standard type": "3030 mm",
            },
          },
          {
            imageSrc: FoSix,
            title: "Folding Door (6 Panels)",
            details: {
              "Frame Depth": "72 mm(2 Tracks Sliding), 104 mm(3 tracks sliding)",
              "Height of Sill": "35 mm",
               "Glass Groove": "11 mm",
              "Glass Thickness": "5/6/8 mm",
              "Maximum Height of Door-Standard type": "3030 mm",
            },
          },
          {
            imageSrc: FoFour,
            title: "Folding Door (4 Panels)",
            details: {
              "Frame Depth": "72 mm(2 Tracks Sliding), 104 mm(3 tracks sliding)",
              "Height of Sill": "35 mm",
               "Glass Groove": "11 mm",
              "Glass Thickness": "5/6/8 mm",
              "Maximum Height of Door-Standard type": "3030 mm",
            },
          },
        ],
      },
]
