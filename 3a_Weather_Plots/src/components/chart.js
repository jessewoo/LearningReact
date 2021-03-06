import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines'


export default (props) => {
  return (
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
  )
}
