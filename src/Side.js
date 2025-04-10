import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css";
import { IoMenu } from "react-icons/io5";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div style={{ padding: "10px" }}>
          <h2>Sidebar</h2>
        </div>
      </Sidebar>
      <IoMenu   className="sidebarbtn" onClick={() => setVisible(true)} />
      {/* <Button className="sidebarbtn" icon="pi pi-arrow-right" /> */}
    </div>
  );
}
