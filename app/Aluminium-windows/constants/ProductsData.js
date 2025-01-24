// data/products.js
import SlgrTwoPTwoT from "../assets/slgr_2p2t.png";
import SlgrThreePTwoT from "../assets/slgr_3p2t.png";
import SlgrFourPTwoT from "../assets/slgr_4p2t.png";
import SlWep3P3T from "../assets/wepsl_3p3t.png";
import SlWepFourPTwoT from "../assets/wepsl_4p2t.png";
import SlWep2p2t from "../assets/wepsl_2p2t.png";
import SlWeTwoPTwoT from "../assets/we_2p2t.png";
import SlWe4p2t from "../assets/wesl_4p2t.png";
import Csml from "../assets/cs_ml.png";
import CsSl from "../assets/cs_Sl.png";
import Atawn from "../assets/at_awn.png";
import Weawn from "../assets/we_awn.png";
import Wepawn from "../assets/wep_awn.png";
import WepMulti from "../assets/we_awnmulti.png";
import AtFx from "../assets/atfx.png";
import Grfx from "../assets/grfx.png";
import WeFx from "../assets/wefx.png";
import GrGlass from "../assets/Grglass.png";
import WeGlass from "../assets/Weglass.png";
import Frwe from "../assets/Fr_we70.png";

// FOR ALUMINIUM SLIDING WINDOWS
export const slidingSeriesData = [
  {
    series: "Grants",
    products: [
      {
        imageSrc: SlgrTwoPTwoT,
        title: "2 Panels on 2 Tracks Grants Sliding Window",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "2500 mm",
        },
      },
      {
        imageSrc: SlgrThreePTwoT,
        title: "4 Panels on 2 Tracks Grants Sliding Window",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "2500 mm",
        },
      },
      {
        imageSrc: SlgrFourPTwoT,
        title: "Sliding Door(3 Panels on 2 Tracks)SFS",
        details: {
          "Frame Depth": "101.6 mm, 120 mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "2250 mm",
        },
      },
    ],
  },
  {
    series: "WE PLUS",
    products: [
      {
        imageSrc: SlWep3P3T,
        title: "Sliding Windows (3 Panels on 3 Tracks)",
        details: {
          "Frame / Sill Depth": "104 mm - for 3 Track Slider",
          "Frame Height": "50 mm - for Slider",
          "Glass Thickness": "5, 6, 8, 13.52 mm",
          "Maximum Height of Window": "1600 mm",
          "Maximum Width of Window": "3000 mm",
        },
      },
      {
        imageSrc: SlWepFourPTwoT,
        title: "4 Panels on 2 Tracks Sliding Window",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Window": "1600 mm",
        },
      },
      {
        imageSrc: SlWep2p2t,
        title: "2 Panels on 2 Tracks WE-Plus Sliding Window",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "1600 mm",
        },
      },
    ],
  },
  {
    series: "WE 70",
    products: [
      {
        imageSrc: SlWeTwoPTwoT,
        title: "2 Panels on 2 Tracks WE-70 Sliding Window",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door": "1600 mm",
        },
      },
      {
        imageSrc: SlWe4p2t,
        title: "Sliding Window (4 Panels on 2 Tracks)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Door": "1600 mm",
        },
      },
    ],
  },
];

// FOR ALUMINIUM SLIDING Windows
export const casementSeriesData = [
  {
    series: "ATIS",
    products: [
      {
        imageSrc: Csml,
        title: "Casement Window (Multi-Lock)",
        details: {
          "Frame Depth": "72, 104 mm ",
          "Height of Sill": "35, 50 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door - Standard Type": "2000 mm",
          "Maximum Height of Door - Large Type": "3045 mm",
          "Glass Groove": "11 mm",
        },
      },
      {
        imageSrc: CsSl,
        title: "Casement Window (Single Lock)",
        details: {
          "Frame Depth": "72, 104 mm ",
          "Height of Sill": "35, 50 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door - Standard Type": "1790 mm",
          "Maximum Height of Door - Large Type": "3045 mm",
          "Glass Groove": "11 mm",
        },
      },
    ],
  },
];

// // FOR ALUMINIUM CASEMENT DOORS

export const awnSeriesData = [
  {
    series: "ATIS",
    products: [
      {
        imageSrc: Atawn,
        title: "Awning Window",
        details: {
          "Frame Depth": "101.6, 120, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",

          "Maximum Height of Door": "3000 mm",
        },
      },
    ],
  },

  {
    series: "WE 70",
    products: [
      {
        imageSrc: Weawn,
        title: "Awning Window WE-70 ",
        details: {
          "Maximum Height of Window": "1800 mm",
          "Frame Depth": "72 mm",
          "Glass Thickness": "5,6,8 mm",
          "Height of Sill": "35 mm",
        },
      },
    ],
  },

  {
    series: "WE PLUS",
    products: [
      {
        imageSrc: Wepawn,
        title: "Awning Window (Multi Lock)",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Groove": "11 mm",
          "Glass Thickness": "Up to 13.5 mm",
          "Maximum Height of Window": "2000 mm",
        },
      },
      {
        imageSrc: WepMulti,
        title: "Awning Window (Single Lock)",
        details: {
          "Maximum Height of Window": "1800 mm",
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",

          "Glass Thickness": "Up to 13.5 mm",
        },
      },
    ],
  },
];

export const fixedSeriesData = [
  {
    series: "ATIS",
    products: [
      {
        imageSrc: AtFx,
        title: "Fixed Window",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",

          "Maximum Height of Window": "2400 mm",
        },
      },
    ],
  },
  {
    series: "Grants",
    products: [
      {
        imageSrc: Grfx,
        title: "Fixed Window Grants",
        details: {
          "Frame Depth": "101.6, 120, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "3500 mm",
        },
      },
    ],
  },
  {
    series: "WE 70",
    products: [
      {
        imageSrc: WeFx,
        title: "Fixed Window",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "Up to 13.5 mm",

          "Maximum Height of Door": "2400 mm",
        },
      },
    ],
  },
];

export const glassSeriesData = [
  {
    series: "Grants",
    products: [
      {
        imageSrc: GrGlass,
        title: "Corner Fixed Windows Grants",
        details: {
          "Frame Depth": "101.6 mm, 120mm, 178 mm",
          "Height of Sill": "50 mm",
          "Glass Thickness": "Up to 31.5 mm",
          "Maximum Height of Door": "3500 mm",
        },
      },
    ],
  },
  {
    series: "WE 70",
    products: [
      {
        imageSrc: WeGlass,
        title: "Corner Fixed Windows WE-70",
        details: {
          "Frame Depth": "72 mm",
          "Height of Sill": "35 mm",
          "Glass Thickness": "5,6,8 mm",
          "Maximum Height of Door": "2400 mm",
        },
      },
    ],
  }

];

// // French Windows
export const frenchSeriesData = [
    {
        series: "WE 70",
        products: [
          {
            imageSrc: Frwe,
            title: "Double Casement Window",
            details: {
              "Minimum Width of Window": "700 mm",
              "Minimum Height of Window": "500 mm",
              "Maximum width of Window": "1600 mm",
              "Maximum Height of Window": "180 mm",
              "Height of Sill": "35 mm",
              "Glass Thickness": "5,6,8 mm",
              "Frame Depth": "72 mm",
              "Insect Screen": "Available",
            },
          },
        ],
      },
]
