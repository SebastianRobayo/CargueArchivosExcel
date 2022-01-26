import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const selectedHandle = (e) => {
    setFile(e.target.file[0]);
  };

  const sendHandle = () => {
    if (!file) {
      alert("debes cargar un archivo");
      return;
    }
  };

  const formdata = new FormData();
  formdata.append("file", file);

  axios.post("http://localhost:5000/files");

  return (
    <div className="App">
      <>
        <div className="container">
          <div className="card mt-5">
            <div className="row">
              <div className="col-md-10">
                <input
                  id="fileInput"
                  type="file"
                  className="form-control"
                  onChange={selectedHandle}
                ></input>
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary col-md-12"
                  onClick={sendHandle}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
