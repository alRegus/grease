import React from "react";
import { Map, Marker } from "pigeon-maps";

import classes from "./OurStore.module.scss";
import CustomerService from "../../CustomerService";
import HearFromYou from "../../HearFromYou";

export default function OurStore() {
  return (
    <section className={classes["our-store"]}>
      <CustomerService />
      <div className={classes["our-store-container"]}>
        <h1>Map and Directions</h1>
        <Map
          height={400}
          defaultCenter={[47.014725, 28.853694]}
          defaultZoom={16}
        >
          <Marker width={50} anchor={[47.014725, 28.853694]} />
        </Map>
        <div id="our-store-directions">
          <h2>Travel Directions</h2>
          <p>Grease is accessible by public transportation.</p>
          <div>
            <strong>By Bus</strong>
            <p>
              <span>19</span>
              <span>18</span>
              <span>49</span>
              <span>33</span>
              <span>44</span>
            </p>
          </div>
          <div>
            <strong>By Trolleybus</strong>
            <p>
              <span>17</span>
              <span>20</span>
              <span>28</span>
              <span>36</span>
              <span>37</span>
              <span>31</span>
            </p>
          </div>
        </div>
      </div>
      <HearFromYou />
    </section>
  );
}
