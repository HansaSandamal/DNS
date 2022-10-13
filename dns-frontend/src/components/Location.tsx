import { fromLonLat } from "ol/proj";
import React, { useEffect, useState } from "react";


const Location: React.FC = () => {
  const [liveLocation, setLiveLocation] = useState([546000, 6868000]);

  return (
    <>
      {/* <Map view={{ center: fromLonLat(liveLocation), zoom: 2 }} >
        <Layers>
          <layer.Tile />
          <layer.Vector source={markers} style={markers.style} zIndex="1" />
        </Layers>
        <Overlays>
          <Overlay ref={(comp) => (this.overlayComp = comp)} element="#popup" />
        </Overlays>
        <Controls attribution={false} zoom={true}>
          <control.Rotate />
          <control.ScaleLine />
          <control.FullScreen />
          <control.OverviewMap />
          <control.ZoomSlider />
          <control.ZoomToExtent />
          <control.Zoom />
        </Controls>
        <Interactions>
          <interaction.Select style={selectedMarkerStyle} />
          <interaction.Draw source={markers} type="Point" />
          <interaction.Modify features={markers.features} />
        </Interactions>
      </Map> */}

     
    </>
  );
};
export default Location;
