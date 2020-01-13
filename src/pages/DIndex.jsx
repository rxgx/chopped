import React, { useEffect, useState } from "react";
import client from '../clients/Firebase';
import Layout from '../components/Layout';
import ThisForThat from '../components/ThisForThat';
import './index.css';

function Index () {
  const [data, setData] = useState({
    sites: ["Website"],
    things: ["Thing"]
  });

  useEffect(() => {
    console.log("client on value");
    client.on("value", snapshot => {
      const values = snapshot.val();
      const data = {
        sites: values.sites.filter(item => !!item),
        things: values.things.filter(item => !!item),
      };
      setData(data);
    });
  }, []);

  return <Layout><ThisForThat sites={data.sites} things={data.things} /></Layout>
}

export default Index;
