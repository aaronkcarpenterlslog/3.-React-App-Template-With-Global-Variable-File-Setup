import React, { useState, useEffect } from "react";

const Login = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sampleData, setSampleData] = useState();
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const testFetch = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SAMPLE_API);
        if (!response.ok) throw Error("Didn't Return Expected Data");
        const responseJSON = await response.json();
        setSampleData(responseJSON);
        setIpAddress(responseJSON.ip);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await testFetch())();
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading Data...</h3>}
      {fetchError && <h4 style={{ color: "red" }}>{`Error: ${fetchError}`}</h4>}
      <h2>Login Feature</h2>
      <h2>
        CURRENT IP ADDRESS:
        <p>{ipAddress}</p>
      </h2>
    </div>
  );
};

export default Login;
