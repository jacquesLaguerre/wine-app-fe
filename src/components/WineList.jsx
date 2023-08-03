

import React from "react";
import wine from "../wine";
import Card from "antd/es/card/Card";
import { Button } from "antd";
import "./WineList.css"; // Import a CSS file for styling (create WineList.css in the same directory)



function WineList() {
    return (
      <div className="wine-list-container">
        <div className="wine-list">
          {wine.map((item) => (
            <div className="wine-card" key={item.id}>
              <Card hoverable style={{ width: 200 }}>
                <img className="wine-poster" alt={item.title} src={item.image} />
  
                <h3 className="wine-title">{item.wine}</h3>
                <div className="wine-buttons">
                  <Button type="primary">Add to favorites</Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default WineList;



