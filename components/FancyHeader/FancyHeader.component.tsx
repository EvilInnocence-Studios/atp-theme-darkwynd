import {FancyHeaderProps} from "./FancyHeader.d";
import styles from './FancyHeader.module.scss';

import logo from "./logo-glowing.png";

export const FancyHeaderComponent = ({text}:FancyHeaderProps) => {
     // Configurable geometry
     const yBase          =   10;           // Height of the straight header bar
     const apexY          =  140 + yBase;   // Height of the point
     const straightL      =  600;           // Length of the straight sections on either side of the point
     const controlXOffset =  200;           // Controls the angle of the point (bigger = wider)

     const arcWidth       = 1920;   // width of the curved header
     const apexX    = arcWidth / 2;           // apex x (middle)
     const controlY = yBase;                  // y for both control points
     const c1x      = apexX - controlXOffset; // first control point
     const c2x      = apexX + controlXOffset; // second control point
 
     const curvedClipPath = 
         `path("M0,0 L0,${yBase} L${straightL},${yBase} Q${c1x},${controlY} ${apexX},${apexY} Q${c2x},${controlY} ${arcWidth - straightL},${yBase} L${arcWidth},${yBase} L${arcWidth},0 Z")`;
 
     // Keep it centered based on the configured width
     const curvedStyle = {
         clipPath: curvedClipPath,
         width: `${arcWidth}px`,
         left: `calc(50% - ${arcWidth / 2}px)`
     };

     const layerCount = 10;
     const baseColor = [38, 114, 142]; // Blue color

     // build glow layers
     const layerStartOffset = 263;   // a bit below the main h1 (-136px in CSS)
     const layerStep = 3;             // pixels per layer to push further down
     const baseAlpha = 0.35;          // max opacity for the first layer

     const layers = Array.from({ length: layerCount }, (_, i) => {
       const t = 1 - i / layerCount; // 1 -> 0
       const alpha = +(baseAlpha * t * t).toFixed(3); // ease-out fade
       return {
         ...curvedStyle,
         marginTop: `${layerStartOffset + i * layerStep}px`,
         backgroundColor: `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${alpha})`,
         zIndex: 9,
         pointerEvents: 'none',
         color: 'transparent'
       } as any;
     });

     return <div className={styles.headerContainer}>
        <h1 className={styles.curved} style={{...curvedStyle, zIndex: 10}}>
            {text}<br/>
            <img src={logo} alt="DarkWynd Logo" className={styles.logo} />
        </h1>
        {layers.map((style, i) => (
          <h1 key={i} className={styles.curved} style={style} aria-hidden="true">Archives</h1>
        ))}
     </div>;
}