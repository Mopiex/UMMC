import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import translate from "./../i18n/translate";
const storageName = "userData";



const TheHeaderDropdown = () => {

  const history = useHistory();

  const [val, setVal] = useState();
  useEffect(() => {}, [val]);
  const resetStorage = () => {
    localStorage.removeItem(storageName);
    setVal(1);
    history.push(`/login`)
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        {localStorage.getItem(storageName) && (
          <div className="c-avatar">
            <div style={{ paddingRight: "10px", fontSize: "20px" }}>
              {JSON.parse(localStorage.getItem(storageName)).username}
            </div>
            <CImg
              src={"avatars/6.jpg"}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
          </div>
        )}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          {translate("profile")}
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          {translate("settings")}
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={resetStorage}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          {translate("log_out")}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
