import * as React from 'react';

interface FetchContextType {
  data: unknown[];
  setData: React.Dispatch<React.SetStateAction<unknown[]>>;
}

export const FetchContext = React.createContext<FetchContextType>({data:[],setData:()=>{}});

const FetchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = React.useState<unknown[]>([]);
  return (
    <FetchContext.Provider value={{ data, setData }}>
      {children}
    </FetchContext.Provider>
  );
};
export default FetchProvider;