// import { useState, useEffect } from "react";
// // Client-side fetching hook
// export const useFetchClient = (url: string, options?: RequestInit) => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null); // Reset error state

//       try {
//         const response = await fetch(
//           process.env.NEXT_PUBLIC_BASE_API_URL + url,
//           options
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, options]);

//   return { data, loading, error };
// };

// Server-side fetching function
export const useFetchServer = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(process.env.BASE_API_URL + url, {
      ...options,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) || [];

    return { data, error: null };
  } catch (err: any) {
    console.log(err);
    return { data: [], error: null };

    // throw new Error(`HTTP error! status: ${err.message}`);
  }
};
