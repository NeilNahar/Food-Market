import { useEffect, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => [setStatus(false)]);
    window.addEventListener("online", () => [setStatus(true)]);
  }, []);
  console.log(status)
  return status;
};
export default useStatus;
