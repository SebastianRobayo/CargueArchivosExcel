import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [file, setFile] = useState(null);

  const selectedHandle = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandle = () => {
    if (!file) {
      alert("debes cargar un archivo");
      return;
    }

    const formdata = new FormData();
    formdata.append("archivo", file);

    fetch("http://localhost:5000/files/post", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;

    setFile(null);
  };

  return (
    <div className="App">
      <>
        <div className="container">
          <div className="card mt-5">
            <div className="row">
              <div className="col-md-10">
                <input
                  id="fileinput"
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
