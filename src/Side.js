import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div style={{ padding: "10px" }}>
          <h2>Sidebar</h2>
        </div>
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
    </div>
  );
}
