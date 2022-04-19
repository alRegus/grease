import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import CustomerService from "../../CustomerService";
import HearFromYou from "../../HearFromYou";

export default function OurStore() {
  return (
    <>
      <CustomerService />
      {/* <div style={{ width: "300px", height: "300px" }}>
        <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div> */}

      <HearFromYou />
    </>
  );
}
