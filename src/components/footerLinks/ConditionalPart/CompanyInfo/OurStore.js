import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import classes from "./OurStore.module.scss";
import CustomerService from "../../CustomerService";
import HearFromYou from "../../HearFromYou";

export default function OurStore() {
  return (
    <section className={classes["our-store"]}>
      <CustomerService />
      <div className={classes["our-store-container"]}>
        <h1>Map and Directions</h1>
        {/* <div style={{ width: "300px", height: "300px" }}>
        <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div> */}
        <div
          className={classes["our-store-container-directions"]}
          id="our-store-directions"
        >
          <h2>Travel Directions</h2>
          <p>Adorama is accessible by public transportation.</p>
          <div>
            <strong>By Subway</strong>
            <p>
              <span>Please be sure to check for any schedule advisories</span>
            </p>
          </div>
          <p>Take the L F M to 14th Street and 6th Avenue</p>
        </div>
      </div>
      <HearFromYou />
    </section>
  );
}
