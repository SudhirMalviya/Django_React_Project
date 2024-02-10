import React from "react";
import AnimatedCursor from "react-animated-cursor"

// export default function CursurAnimate() {
//   return (
//     <div className="App">
//     <AnimatedCursor
//       innerSize={9}
//       outerSize={9}
//       color='193, 11, 111'
//       outerAlpha={0.2}
//       innerScale={0.7}
//       outerScale={5}
//       clickables={[
//         'a',
//         'input[type="text"]',
//         'input[type="email"]',
//         'input[type="number"]',
//         'input[type="submit"]',
//         'input[type="image"]',
//         'label[for]',
//         'select',
//         'textarea',
//         'button',
//         '.link'
//       ]}
//     />
//     </div>
//   );
// }


export default function CursurAnimate() {
  return (
    <div className="CursurAnimate">
      <AnimatedCursor
        innerSize={8}
        outerSize={12}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={5}
        outerStyle={{
          border: '1px solid red',
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'input[type="password"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.btn',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 20,
              color: '255, 255, 255',
              outerAlpha: 6,
              innerScale: 7,
              outerScale: 5,
            },
          },
        ]}
      />
    </div>
  );
}
