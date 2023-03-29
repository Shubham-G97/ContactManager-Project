import React, { useState } from "react";
import "./Functionalities.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import exportFile from "./../../images/exportFile.png";
import ImportFile from "./ImportFile"
import ImportComplete from "./ImportComplete"
import DeleteContactComfirmation from "./DeleteContactComfirmation";
import DeleteSuccessfullyFile from "./DeleteSuccessfullyFile";
// import ImportFile from "../../ImportFile";
// import ImportComplete from "../../importComplete";
// import DeleteContactComfirmation from "../../DeleteContactComfirmation";
// import DeleteSuccessfullyFile from "../../DeleteSuccessfullyFile";

const Functionalities = (props) => {
  const [importFile, setImportFile] = useState(false);
  const [importComplete, setImportComplet] = useState(false);
  const [deletefile, setDeletefile] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handledelete = async () => {
    let { ids } = props;
    setDeletefile(true);
  };

  return (
    <>
      <div className="below-header-nav">
        <div className="below-header-nav-left">
          <div className="selectdate">
            <CalendarMonthIcon />
            Select Date
            <ExpandMoreIcon />
          </div>
          <div className="filter">
            <FilterListIcon />
            Filter |
            <ExpandMoreIcon />
          </div>
        </div>
        <div className="below-header-nav-right">

          {/* =========== DELETE BUTTON ========= */}
          <div className="delete">
            <Button
              style={{ color: "black" }}
              onClick={handledelete}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>

          {/* =========== IMPORT BUTTON ========= */}
          <div className="import">
            <Button
              style={{ color: "black" }}
              onClick={() => {
                setImportFile(true);
              }}
            >
              <ImportExportIcon style={{ color: "black" }}>
                Import
              </ImportExportIcon>
              Import
            </Button>
          </div>

          {/* =========== EXPORT BUTTON ========= */}
          <div className="export">
            <Button style={{ color: "black", padding: "4px" }}>
              <img src={exportFile} alt="exportFile" />
              Export
            </Button>
          </div>
        </div>

        {/* ============= TRIGGERING IMPORT FILE POP ======= */}
        <div className="importFile">
          <ImportFile
            trigger={importFile}
            setfile={setImportFile}
            importCompletStatus={setImportComplet}
            reFetch={props.rend}
          ></ImportFile>
        </div>

        {/* ============ TRIGGERING IMPORT COMPLETE POP UP ===== */}
        <div className="importFile">
          <ImportComplete trigger2={importComplete}></ImportComplete>
        </div>

        {/*  ========== TRIGGERING DELETE CONFIRMATION POP UP ==== */}
        <div className="deletefile">
          <DeleteContactComfirmation
            trigger3={deletefile}
            arr={props.ids}
            checkids={props.checkids}
            rend={props.rend}
            hide={setDeletefile}
            setDeleteSuccessMessage={setDeleteSuccess}
          />
        </div>

        {/*  ========== TRIGGERING DELETE SUCCESS POP UP */}
        <div className="deletefile">
          <DeleteSuccessfullyFile 
            trigger4={deleteSuccess} 
          />
        </div>
        
      </div>
    </>
  );
};

export default Functionalities;
