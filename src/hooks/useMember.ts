import * as React from "react";

import apiClient from "utils/api-client";
import { MemProps } from "types";

const useMember = () => {
  const [data, setData] = React.useState<MemProps[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    apiClient
      .get(`/members`)
      .then((response) => {
        setLoading(false);
        setData(response.data as MemProps[]);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  return { data, loading, error };
};

export default useMember;
