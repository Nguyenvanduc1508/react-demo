import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "./Info";

const Details: React.FunctionComponent = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => setDetails(res.data));
  }, [id]);

  return <>{details && <Info details={details} />}</>;
};

export default Details;
