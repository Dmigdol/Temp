import './Conditionals.scss'
import Select from 'react-select'
import { useRef, useEffect, useState } from "react";

function Conditionals({data}) {

  /*
    Data will be recieved in following format
      Data {
        Frame: 'Standard,In-Swing,Pivot',
        Height: #,
        NumOfDoors: Single/Double,
      }

    Based on this information:
      return specific drop downs

      standard frame ?
        <72 ? -> 3 options dd
        72 - 84 ? -> 3 options dd
        84 - 96 ? -> 3 options dd
        96 - 120 ? -> 3 options dd
  */


    const frameOptions = [
      {value: 'standard', label: 'Standard'},
      {value: 'ins', label: 'In-Swing'},
      {value: 'pivot', label: 'Pivot'}
    ]

    // const standardFrame = {
    //   single: {
    //     height: `36" up`,
    //     strike: {
    //       type: {
    //         default: [`Lip 2 1/4" Radius`, `Lip 2 1/4" Square`, `T-Strike 1 1/8" x 2 3/4"`,
    //                     `ASA-Strike 1 1/4" x 4 7/8"`, `No Strike`],
    //         deadbolt: [`1" x 2 1/4" Radius`, `1" x 2 1/4" Square`, `1 1/8" x 2 3/4" Radius`, `1 1/8" x 2 3/4" Square`]
    //       },
    //     },
    //     hinge: {
    //       '<72' : [`(2)CalRoyal CR3D51`, `(2)Tectus 340 3D`, `(2) 4x4 butt hinge`],
    //       '72-84' : [`(3)CalRoyal CR3D51`, `(3)Tectus 340 3D`, `(3) 4x4 butt hinge`],
    //       '84-96' : [`(3)CalRoyal CR3D62`, `(3)Tectus 540 3D`, `(4) 4x4 butt hinge`],
    //       '>96' :  [`(4)CalRoyal CR3D62`, `(4)Tectus 540 3D`, `(4) 4x4 butt hinge`]
    //     }
    //   },
    //   double : 'etc...'
    // }

    const calcDD = () => {
      // data.height < 72 ? standardFrame[rowObj] :
    }


  return (
    <label className='frame-id'>
      <span className='frame-id-text'>
      {`Frame Type: `}
      </span>
        <Select
        className='frame-dropdown'
        options={frameOptions} />
    </label>
  )
}

export default Conditionals;