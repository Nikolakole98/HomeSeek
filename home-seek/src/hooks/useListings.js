import { useCallback, useEffect, useState } from "react";
import { getListings } from "../data/listingsStore";

export function useListings() {
  const [state, setState] = useState({ listings: [], loading: true, error: false });

  const reload = useCallback(async () => {
    try {
      setState({ listings: await getListings(), loading: false, error: false });
    } catch {
      setState({ listings: [], loading: false, error: true });
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return { ...state, reload };
}
