import * as React from "react";

import apiClient from "utils/api-client";
import { OrgsProps } from "types";

const useOrg = () => {
  const [data, setData] = React.useState<null | OrgsProps[]>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    apiClient
      .get(`/organizations`)
      .then((response) => {
        setLoading(false);
        setData(response.data as OrgsProps[]);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  return { data, loading, error };
};

export default useOrg;
