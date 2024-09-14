// hardcoded numbers are from Arrange.tsx

export default function calculatePositions() {
    const X_OFFSET = 32  // dist. center of ellipse from left edge
    const Y_OFFSET = 27  // dist. center of ellipse from top edge
    const X_CENTERS = 80 // dist. bw centers of ellipses horiz
    const Y_CENTERS = 60 // dist. bw center of ellipses vert

    // [layout - 1][clause][var][x(0) | y(1)]
    const POSITIONS = [
        [[[286+X_OFFSET, 303+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 303+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 303+Y_OFFSET]]
        ],

        [[[286+X_OFFSET, 183+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 183+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 183+Y_OFFSET]],
        
         [[286+X_OFFSET, 423+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 423+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 423+Y_OFFSET]]
        ],
        
        [[[150+X_OFFSET, 203+Y_OFFSET],
          [150+X_OFFSET, 203+Y_OFFSET+Y_CENTERS],
          [150+X_OFFSET, 203+Y_OFFSET+Y_CENTERS*2]], 
        
         [[286+X_OFFSET, 423+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 423+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 423+Y_OFFSET]],
        
         [[586+X_OFFSET, 203+Y_OFFSET],
          [586+X_OFFSET, 203+Y_OFFSET+Y_CENTERS],
          [586+X_OFFSET, 203+Y_OFFSET+Y_CENTERS*2]]
        ],
        
        [[[286+X_OFFSET, 123+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 123+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 123+Y_OFFSET]],

         [[150+X_OFFSET, 203+Y_OFFSET],
          [150+X_OFFSET, 203+Y_OFFSET+Y_CENTERS],
          [150+X_OFFSET, 203+Y_OFFSET+Y_CENTERS*2]],

         [[286+X_OFFSET, 423+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 423+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 423+Y_OFFSET]],
        
         [[586+X_OFFSET, 203+Y_OFFSET],
          [586+X_OFFSET, 203+Y_OFFSET+Y_CENTERS],
          [586+X_OFFSET, 203+Y_OFFSET+Y_CENTERS*2]]
        ],
        
        [
         [[100+X_OFFSET+32*2, 80+Y_OFFSET],
          [100+X_OFFSET+32, 80+Y_OFFSET+Y_CENTERS],
          [100+X_OFFSET, 80+Y_OFFSET+Y_CENTERS*2]],
        
         [[100+X_OFFSET, 300+Y_OFFSET],
          [100+X_OFFSET+32, 300+Y_OFFSET+Y_CENTERS],
          [100+X_OFFSET+32*2, 300+Y_OFFSET+Y_CENTERS*2]],
        
         [[286+X_OFFSET, 493+Y_OFFSET], 
          [286+X_OFFSET+X_CENTERS, 493+Y_OFFSET],
          [286+X_OFFSET+X_CENTERS*2, 493+Y_OFFSET]], 
        
         [[548+X_OFFSET+32*2, 300+Y_OFFSET],
          [548+X_OFFSET+32, 300+Y_OFFSET+Y_CENTERS],
          [548+X_OFFSET, 300+Y_OFFSET+Y_CENTERS*2]],
        
         [[548+X_OFFSET, 80+Y_OFFSET],
          [548+X_OFFSET+32, 80+Y_OFFSET+Y_CENTERS],
          [548+X_OFFSET+32*2, 80+Y_OFFSET+Y_CENTERS*2]]
        ]
    ]

    return POSITIONS
}