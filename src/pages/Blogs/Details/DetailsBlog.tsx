import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";

const DetailsBlog: React.FunctionComponent = () => {
  const { id } = useParams();
  const [infoBLogs, setInfoBLogs] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/blog/${id}`)
      .then((res) => setInfoBLogs(res.data));
  }, [id]);

  return <>{infoBLogs && <Items infoBLogs={infoBLogs} />}</>;
};

export default DetailsBlog;
