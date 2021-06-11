import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import { useHttp } from "../hooks/http.hook";
import { useSelector, useDispatch } from "react-redux";
import translate from "./../../i18n/translate";
import { FormattedMessage } from "react-intl";
import DashboardFooter from "./DashboardFooter";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resultData, setResultData] = useState();
  const [uniqId, setUniqId] = useState();
  const [chartype, setType] = useState();

  const toggle = (e) => setDropdownOpen((prevState) => !prevState);
  const charts = useSelector((state) => state.charts);
  React.useEffect(() => getList(), []);

  const { loading, error, requestFile, requestAuth, request, clearError } =
    useHttp();

  const typeHandler = (newT) => {
    setType(newT);
  };

  const getList = async () => {
    const data = await requestAuth(
      "http://84.252.139.162:8080/dashboard",
      "GET"
    );

    setResultData(data);
  };

  React.useEffect(() => {}, [resultData]);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const dropDownHandler = (idx, index) => {
    console.log(index.target.innerText);
    setUniqId(index.target.innerText);
  };

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append("sheet_file", selectedFile);

    const data = await requestFile(
      "http://84.252.139.162:8080/dashboard",
      "POST",
      formData
    );
  };

  return (
    <>
      <CCard>
        <CRow className="uploadContent">
          <label class="custom-file-upload">
            <input type="file" name="file" hidden onChange={changeHandler} />
            <div
              class="addChartBtn"
              style={{
                borderRadius: "5px",
                height: "32px",
                marginTop: "8px",
                marginRight: "8px",
              }}
            >
              Upload
            </div>
          </label>
          <CButton color="primary" className="mr-2" onClick={handleSubmission}>
            <CIcon name="cilFile" />
          </CButton>
        </CRow>

        <button
          type="button"
          className="addChartBtn"
          onClick={() => dispatch({ type: "add-chart" })}
        >
          {translate("add_chart")}
        </button>
        <div className="grid">
          {charts.map((i, idx) => {
            return (
              <CCardBody key={idx}>
                <CRow>
                  <CCol sm="7">
                    <FormattedMessage id="chart.input.placeholder">
                      {(placeholder) => (
                        <input
                          value={i.chartTitle}
                          maxLength="15"
                          onChange={(e) =>
                            dispatch({
                              type: "find-chart",
                              chartTitle: e.target.value,
                              id: i.id,
                            })
                          }
                          className="card-title mb-0 chartTitle"
                          placeholder={placeholder}
                        />
                      )}
                    </FormattedMessage>
                    <div className="small text-muted">
                      {translate("months.may")} 2021
                    </div>
                  </CCol>
                  <CCol
                    sm="5"
                    className="d-none d-md-block cloudDownloadBtnGroup"
                  >
                    <div className="row mr-1">
                      <Dropdown
                        id={idx}
                        key={idx}
                        isOpen={dropdownOpen}
                        toggle={toggle}
                      >
                        <DropdownToggle key={idx} caret>
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu
                          key={idx}
                          onClick={(e) => dropDownHandler(idx, e)}
                        >
                          {resultData &&
                            [
                              ...new Set(
                                resultData.map((item) => {
                                  return parseInt(item.id_group_item);
                                })
                              ),
                            ]
                              .sort((a, b) => (a > b ? 1 : -1))
                              .map((item, index) => {
                                return (
                                  <DropdownItem key={index}>
                                    {item}
                                  </DropdownItem>
                                );
                              })}
                        </DropdownMenu>
                      </Dropdown>

                      <CButton
                        color="primary"
                        className=""
                        onClick={() =>
                          dispatch({ type: "remove-chart", id: i.id })
                        }
                      >
                        <CIcon name="cil-x" />
                      </CButton>
                    </div>
                    <CButtonGroup className="mt-2 mr-1">
                      <CButton
                        color="outline-secondary"
                        className="mx-0 btn"
                        active={i.day}
                        onClick={() =>
                          dispatch({ type: "set-chart-day", id: i.id })
                        }
                      >
                        {translate("day")}
                      </CButton>
                      <CButton
                        color="outline-secondary"
                        className="mx-0 btn"
                        active={i.month}
                        onClick={() =>
                          dispatch({ type: "set-chart-month", id: i.id })
                        }
                      >
                        {translate("month")}
                      </CButton>

                      <CButton
                        color="outline-secondary"
                        className="mx-0 btn"
                        active={i.year}
                        onClick={() =>
                          dispatch({ type: "set-chart-year", id: i.id })
                        }
                      >
                        {translate("year")}
                      </CButton>
                    </CButtonGroup>
                  </CCol>
                </CRow>
                {uniqId && resultData && (
                  <MainChartExample
                    id={i.id}
                    data={resultData.filter(
                      (item) => item.id_group_item == uniqId
                    )}
                    unique_id={uniqId}
                    typeT={i.type}
                    day={i.day}
                    month={i.month}
                    charttype={i.chartType}
                    style={{ minHeight: "200px", marginTop: "40px" }}
                    className="mr-1"
                  />
                )}
              </CCardBody>
            );
          })}
        </div>
      </CCard>
    </>
  );
};

export default Dashboard;
